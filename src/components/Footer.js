import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <p className='my-2' style={{textAlign:'center',color:'#222831'}} >Created with <span className='mx-2' style={{color:'red'}} >&#9829;</span> by <a className='text-decoration-none color-primary' href="https://aulth.github.io/usman">Mohd Usman</a> </p>
                </div>
            </div>
        )
    }
}

export default Footer
