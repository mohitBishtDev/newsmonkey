
import React from "react";

const NewsItem =(props)=>{
  
    let { title, description, imageUrl, newsUrl, author, date, source } =props;
    return (
      <div className="my-3">
        <div className="card" style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0 }}>
            <span className="badge rounded-pill bg-danger" style={{ fontSize: "0.7rem", margin: "8px" }}>
              {source}
            </span>
          </div>
         <img
  src={imageUrl || "https://www.dreamstime.com/stock-photo-news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-image42301371"}
  className="card-img-top"
  alt="news"
/>


          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
