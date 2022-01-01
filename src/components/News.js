import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps ={
    country : 'us',
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
    async updateNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData =await data.json();
      this.setState({
        articles:parsedData.articles,
        loading : false
      });
    }
    async componentDidMount(){
      this.updateNews();
    }

    handleNext = async ()=>{
      this.setState({page : this.state.page+1})
      this.updateNews();
    }
    handlePrev = async ()=>{
      this.setState({page:this.state.page - 1});
      this.updateNews();
      }
    render() {
        return (
            <div className='container my-3'>
              {/* {!this.state.loading && <h2 className='text-center' >Todays Top-Headlines in {this.props.category.split('').map(item=>{item[0].toUpperCase()+item.slice(1).toLowerCase()).join('')}} </h2>} */}
              {this.state.loading && <Spinner/>}
                <div className="row"> 
                    { !this.state.loading && this.state.articles.map((item)=>{
                        return <div key={item.url} className="col-md-4">
                                    <NewsItem 
                                      title={item.title?item.title.slice(0,80) +'...':' '} 
                                      description={item.description?item.description.slice(0,90)+'...':' '} 
                                      newsUrl={item.url} imageUrl={item.urlToImage?(item.urlToImage.includes('https://i-invdn-com.investing.com/news/')?item.urlToImage.replace('https://i-invdn-com.investing.com/news/',''):item.urlToImage):'https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'} 
                                      date={item.publishedAt.slice(0,10)} 
                                      source = {item.source.name?item.source.name:''}
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
