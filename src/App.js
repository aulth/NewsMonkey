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
  pageSize = 12;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
              <Route path="/" element={<News key='general' country='us' category='general' pageSize={this.pageSize} />} />
              <Route path="/about" element={<About/> } />
              <Route path="/business" element={<News key='business'  country='us' category='business' pageSize={this.pageSize} />} />
              <Route path="/entertainment" element={<News key='entertainment'  country='us' category='entertainment' pageSize={this.pageSize} />} />
              <Route path="/general" element={<News key='general'  country='us' category='general' pageSize={this.pageSize} />} />
              <Route path="/health" element={<News key='health'  country='us' category='health' pageSize={this.pageSize} />} />
              <Route path="/science" element={<News key='science'  country='us' category='science' pageSize={this.pageSize} />} />
              <Route path="/sports" element={<News key='sports'  country='us' category='sports' pageSize={this.pageSize} />} />
              <Route path="/technology" element={<News key='technology'  country='us' category='technology' pageSize={this.pageSize} />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    )
  }
}

