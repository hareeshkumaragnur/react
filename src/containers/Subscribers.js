import React, { Component } from 'react';
import axios from 'axios';

// Lifecycle hooks are applicable to class comp 
class Subscribers extends Component {

  constructor() {
    super();
    console.log("-------------1. Inside Constructor -------------");

    this.state = {
      subscriberList: []
    }
  }

  componentDidMount() {
    console.log("----------3. Inside componentDidMount Method --------");

    // Whenever the comp comes into view -- this lifecycle hook getting called
    // immediately called after render
    // this is the ideal place for you to send ajax calls
    // this is the place in which we can change state -- 
    // so that render would be called again to re-render the ui

    axios.get('http://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res);
        this.setState({
          subscriberList: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('It is over!');
      });
  }

  componentDidUpdate() {
    console.log("------- 4. Inside componentDidUpdate Method -------");
  }

  render() {

    // Never change the state here 
    console.log("-------------2. Inside Render Method -----------");

    return (
      <>
        <div>
          <p>Listing Subscribers</p>
          <a href="https://reactjs.org/docs/state-and-lifecycle.html">Learn more about Lifecycle Hooks here</a>
          <br />
        </div>

        {this.state.subscriberList && this.state.subscriberList.length > 0 ?
        // Todo: Loop thru
          <div className="col-md-3">
            <div className="card bg-light mb-3">
              <div className="card-header">{this.state.subscriberList[0].name}</div>
              <div className="card-body">
                <h5 className="card-title">{this.state.subscriberList[0].phone}</h5>
                <p className="card-text">{this.state.subscriberList[0].email}</p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
          :
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        }
      </>
    )
  }
}

export default Subscribers;