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
  c = 'Mohd Usman';
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
              <Route path="/" element={<News key='general' country='in' category='general' pageSize={21} />} />
              <Route path="/about" element={<About/> } />
              <Route path="/business" element={<News key='business'  country='in' category='business' pageSize={21} />} />
              <Route path="/entertainment" element={<News key='entertainment'  country='in' category='entertainment' pageSize={21} />} />
              <Route path="/general" element={<News key='general'  country='in' category='general' pageSize={21} />} />
              <Route path="/health" element={<News key='health'  country='in' category='health' pageSize={21} />} />
              <Route path="/science" element={<News key='science'  country='in' category='science' pageSize={21} />} />
              <Route path="/sports" element={<News key='sports'  country='in' category='sports' pageSize={21} />} />
              <Route path="/technology" element={<News key='technology'  country='in' category='technology' pageSize={21} />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    )
  }
}

