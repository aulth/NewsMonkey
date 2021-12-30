import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, newsUrl, imageUrl,date} = this.props;
        let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.publishedAt = new Date(date);
        this.newsDate={
            month : monthName[this.publishedAt.getMonth()],
            day : this.publishedAt.getDate(),
            year : this.publishedAt.getFullYear(),
            time : this.publishedAt.getHours() + ':' + this.publishedAt.getMinutes() + ':' + this.publishedAt.getSeconds()
        }
        return (
            <div>
                <div className="card m-2">
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p>{this.newsDate.month + ' ' + this.newsDate.day +', ' + this.newsDate.year}</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
