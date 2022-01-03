import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    // country : 'us',
    category: 'general',
    apiKey: '6328182ecb4d4dd9b91de9eeec9bef8a',
    pageSize: '21',
  }
  static propTypes = {
    // country : PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    apiKey: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: '',
    }
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults,
    });
    console.log(parsedData)
  }

  async componentDidMount() {
    this.updateNews();
  }

  loadMoreData = async ()=>{
    this.setState({ page: this.state.page + 1 })
    this.updateNews();
  }
  
  render() {
    return (
      <InfiniteScroll
          dataLength={this.state.articles.length} 
          next={this.loadMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
        <div className='container my-3'>
        <div className="row">
          {this.state.articles.map((item) => {
            return <div key={item.url} className="col-md-4">
                    <NewsItem
                      title={item.title ? item.title.slice(0, 80) + '...' : ' '}
                      description={item.description ? item.description.slice(0, 90) + '...' : ' '}
                      newsUrl={item.url} imageUrl={item.urlToImage ? (item.urlToImage.includes('https://i-invdn-com.investing.com/news/') ? item.urlToImage.replace('https://i-invdn-com.investing.com/news/', '') : item.urlToImage) : 'https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg'}
                      date={item.publishedAt.slice(0, 10)}
                      source={item.source.name ? item.source.name : ''}
                    />
                  </div>
          })}
        </div>
      </div>
        </InfiniteScroll>

    );
  }
}

export default News