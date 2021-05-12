import React from 'react'

const Program = (props) => { // receive data from parent comp

  console.log(props);

  /* props are obj 
     props are read-only
     props can be used receive data from parent comp
     props can have children property
  */

  return (
    <div className="card mb-3">
      <div className="card-header">
        Featured 
        <span className="badge bg-warning">{props.category}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.children}</p>
        <button type="button" className="btn btn-primary">Watch it</button>
      </div>
      <div className="card-footer text-muted">
        {props.time}
      </div>
    </div>
  )
}

export default Program;
