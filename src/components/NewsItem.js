import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, source, author, date } =
      this.props;
    return (
      <>
        <div className="card my-2">
          <img
            src={
              !imageUrl
                ? "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png"
                : imageUrl
            }
            className="card-img-top"
            alt="img"
          />
          <div className="card-body">
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm  btn-dark"
            >
              Read more <i className="fa fa-book mx-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
