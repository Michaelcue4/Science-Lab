import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Menu = styled.div`
width:500px;
color: Red;
padding: 6px
text-align: center
border-bottom: 2px solid red
font-size:20px
text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
h1{
    font-size: 60px
    
    color:yellow
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