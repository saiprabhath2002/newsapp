import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
      let { title, description, imgurl,url,author,date } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target="blank" className="btn btn-primary">
            Read More..
          </a>
          <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>
        </div>
      </div>
    );
  }
}

export default Newsitem;
