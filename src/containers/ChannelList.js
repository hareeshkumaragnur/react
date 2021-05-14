import React, { Component } from 'react';

// class comp should extend React component
// only then render method would be called automatically
class ChannelList extends Component {

  // state -- we can have dataa within class comp in state
  /*
    states are mutable (editable)
    Do not mutate state directly. Use setState()
    calling setState will result in re-rendering of the JSX
    
  */
  state = {
    featureName: 'Class Comp with State',
    tvChannelList: [
      { name: 'Discovery', desc: '#1 Infotainment Channel', logoURL: 'https://place-hold.it/200x140' },
      { name: 'NatGeo', desc: 'Best Infotainment Channel', logoURL: 'https://place-hold.it/200x140' },
      { name: 'Star Sports', desc: '#1 Sports Channel', logoURL: 'https://place-hold.it/200x140' }
    ]
  }

  // public method -- arrow fn will have 'this' keyword within
  handleAddToFav = () => {
    // setState will merge the changes with exisiting properties
    this.setState({
      tvChannelList: [
        { name: 'Discovery [ Added ]', desc: '#1 Infotainment Channel', logoURL: 'https://place-hold.it/200x140' },
        { name: 'NatGeo', desc: 'Best Infotainment Channel', logoURL: 'https://place-hold.it/200x140' },
        { name: 'Star Sports', desc: '#1 Sports Channel', logoURL: 'https://place-hold.it/200x140' }
      ]
    });
  }

  // should render JSX
  render() {

    console.log('Inside Render');

    // render method should mandatorily return JSX
    return (
      <div>
        <p>{this.state.featureName}</p>
        <div className="row">

          <div className='col-md-3' >
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" alt="..." src={this.state.tvChannelList[0].logoURL} />
                <h5 className="card-title">{this.state.tvChannelList[0].name}</h5>
                <p className="card-text">{this.state.tvChannelList[0].desc}</p>
                <button type="button" className="btn btn-primary float-right" onClick={this.handleAddToFav}>
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

          <div className='col-md-3' >
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" alt="..." src={this.state.tvChannelList[1].logoURL} />
                <h5 className="card-title">{this.state.tvChannelList[1].name}</h5>
                <p className="card-text">{this.state.tvChannelList[1].desc}</p>
                <button type="button" className="btn btn-primary float-right" onClick={this.handleAddToFav}>
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

          <div className='col-md-3' >
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" alt="..." src={this.state.tvChannelList[2].logoURL} />
                <h5 className="card-title">{this.state.tvChannelList[2].name}</h5>
                <p className="card-text">{this.state.tvChannelList[2].desc}</p>
                <button type="button" className="btn btn-primary float-right" onClick={this.handleAddToFav}>
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ChannelList;