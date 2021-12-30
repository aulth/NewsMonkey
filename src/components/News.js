import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps ={
    country : 'in',
    category : 'general',
    apiKey : '6328182ecb4d4dd9b91de9eeec9bef8a',
    pageSize : '21',
  }
  static propTypes = {
    country : PropTypes.string.isRequired,
    category : PropTypes.string.isRequired,
    apiKey : PropTypes.string.isRequired,
    pageSize : PropTypes.number.isRequired,
  }
    constructor(){
      super();
      this.state = {
          articles : [],
          loading : false,
          page : 1,
          totalResults: '',
      }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data =await fetch(url);
        let parsedData =await data.json();
        this.setState({
          articles : parsedData.articles,
          totalResults : parsedData.totalResults,
          loading : false
        });
    }

    handleNext = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData =await data.json();
        this.setState({
          articles:parsedData.articles,
          page : this.state.page + 1,
          loading : false
        });
    }
    handlePrev = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData =await data.json();
        this.setState({
          articles:parsedData.articles,
          page : this.state.page - 1,
          loading : false
        });
      }
    render() {
        return (
            <div className='container my-3'>
              {this.state.loading && <Spinner/>}
                <div className="row"> 
                    { !this.state.loading && this.state.articles.map((item)=>{
                        return <div key={item.url} className="col-md-4">
                                    <NewsItem 
                                      title={item.title?item.title.slice(0,80) +'...':' '} 
                                      description={item.description?item.description.slice(0,90)+'...':' '} 
                                      newsUrl={item.url} imageUrl={item.urlToImage?(item.urlToImage.includes('https://i-invdn-com.investing.com/news/')?item.urlToImage.replace('https://i-invdn-com.investing.com/news/',''):item.urlToImage):'https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'} 
                                      date={item.publishedAt.slice(0,10)} 
                                    />
                                </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between my-3">
                <button type="button" disabled={this.state.page<=1} className="btn btn-warning" onClick={this.handlePrev} >&laquo;Prev</button>
                <button type="button" style={{display:this.state.page<=1?'none':'inline'}} className="btn btn-warning" onClick={this.handlePrev} >Page : {this.state.page}</button>
                <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-warning" onClick={this.handleNext} >Next &raquo;</button>
                </div>
            </div>

        )
    }
}

export default News
