import React, { Component } from 'react'

export class About extends Component {
    static defaultProps={
        appName : 'NewsMonkey'
    }
    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2>About</h2>
                    {this.props.appName} is a news aggregator application. It fetches news from various news sources and displays them in a clean and organized manner. It is developed using React, Redux, React Router, React Bootstrap. 
                </div>
            </div>
        )
    }
}

export default About
