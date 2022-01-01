import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Footer from './components/Footer';

export default class App extends Component {
  pageSize = 21;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
              <Route path="/" element={<News key='general' country='in' category='general' pageSize={this.pageSize} />} />
              <Route path="/about" element={<About/> } />
              <Route path="/business" element={<News key='business'  country='in' category='business' pageSize={this.pageSize} />} />
              <Route path="/entertainment" element={<News key='entertainment'  country='in' category='entertainment' pageSize={this.pageSize} />} />
              <Route path="/general" element={<News key='general'  country='in' category='general' pageSize={this.pageSize} />} />
              <Route path="/health" element={<News key='health'  country='in' category='health' pageSize={this.pageSize} />} />
              <Route path="/science" element={<News key='science'  country='in' category='science' pageSize={this.pageSize} />} />
              <Route path="/sports" element={<News key='sports'  country='in' category='sports' pageSize={this.pageSize} />} />
              <Route path="/technology" element={<News key='technology'  country='in' category='technology' pageSize={this.pageSize} />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    )
  }
}

