import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Menu = styled.div`
width:500px;
color: white;
padding: 6px
border: 2px;
text-align: right;
font-size:20px
text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
h1{
    font-size: 60px
    text-align:right;
    color:white
}
`
class Home extends Component{
    render() {
        

        return (
            
            <div className ='Homepage'>
                <Menu>
                <h1> Formula Sheet </h1>
                
                <div>
                <Link to ="/Scientists"> Scientists  </Link>
                </div>
                <div>
                <Link to ="/Info"> Info </Link>
                </div>
                </Menu>
            </div>
            
                )
            }
    
}
export default Home