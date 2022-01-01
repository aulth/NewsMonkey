import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, newsUrl, imageUrl,date, source} = this.props;
        return (
            <div>
                <div className="card m-2">
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title} <span className="badge bg-dark text-light mx-0 m-1">{source}</span></h5>
                <p className="card-text">{description}</p>
                <p>{new Date(date).toGMTString()}</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-warning">Read more</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
