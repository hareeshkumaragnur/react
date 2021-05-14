import React, { Component } from 'react'

class TrendingShows extends Component {
  
  constructor(props){
    super(props); // must call super() to get this keyword
    // have the state data within constructor
    this.state = {
      trendingShowList: [
        { id: 1, name: 'Planet Earth', host: 'David Attenborough', isInWatchlist: false },
        { id: 2, name: 'IPL Cricket', host: 'Sourva Ganguly', isInWatchlist: false },
        { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchlist: false },
        { id: 4, name: 'Planet Earth 2', host: 'David Attenborough', isInWatchlist: false }
      ]
    }
  }

  handleAddToWatchlist(index){
    console.log(this);
    console.log(index);

    // working with state immutably
    let showList = [ ...this.state.trendingShowList ]; // creating duplicate using spread operator - es2015
    showList[index].isInWatchlist = !showList[index].isInWatchlist;
    this.setState({
      trendingShowList: showList
    });
  }

  render() {
    // ideal place for loop thru -- using map
    let shows = null;

    if( this.state.trendingShowList &&  this.state.trendingShowList.length > 0){
      shows = this.state.trendingShowList.map( ( show, index ) => {
        console.log(show);
        return(
          <li className="list-group-item" key={show.id}>
            #{show.id} {show.name} | Host: {show.host} 
            <button className="btn btn-success text-right" 
            onClick={this.handleAddToWatchlist.bind(this, index)}>
              {
                show.isInWatchlist? 'In Watchlist': 'Add to Watchlist'
              }
            </button>
          </li>
        )
      });
    }

    return (
      <div className="text-left">
        <p>Trending shows - {this.props.date} </p>
        <ul className="list-group">
          {
            this.state.trendingShowList && this.state.trendingShowList.length >0? 
              shows
              :
              <div className="alert alert-warning">
                No Trending Shows found
              </div>
          }
        </ul>
      </div>
    )
  }
}

export default TrendingShows;