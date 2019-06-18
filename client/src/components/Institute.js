import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components';
const M = styled.div`
color:white;
text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
`

const Menu = styled.div`
width:500px;
color: Red;
padding: 6px
text-align: center
border-bottom: 6px solid red
font-size:20px
text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
h1{
    font-size: 60px
    
    color:white
}
`
class Institute extends Component{
    state = {
        institute: 
        {
            name:"",
            street:"",
            state:"",
            zipcode:""
                
        },
        redirectToHome: false,
    }
    componentDidMount = () => {
        axios.get(`/api/v1/institutes/${this.props.match.params.id}`).then(res=>{
            this.setState({institute:res.data})
        })
    }
    deleteScientist = () => {
        axios.delete(`/api/v1/institutes/${this.props.match.params.id}`).then(res => {
            this.setState({redirectToHome: true})
        })
    }
    render() {
        if(this.state.redirectToHome) {
            return (< Redirect to="/Scientists" />)
        }

        return (
            <div>
            <div className ='Info'>
                <Menu>
                <h1> Credits </h1>
                <p> Reasearch Institution  </p>
                <div>
                <Link to ="/"> Home </Link>
                </div>
                <div>
                <Link to ="/Scientists"> Scientist </Link>
                </div>
                </Menu>
            </div>
                <M>
                <h1>{this.state.institute.name}</h1>
                    <p>Street :{this.state.institute.street}</p>
                    <p>State :{this.state.institute.state}</p>
                    <p>Zipcode :{this.state.institute.zipcode}</p>
                    <button onClick={this.deleteScientist}>Delete Information </button>
                </M>
            </div>
        
                )
            }
    
}
export default Institute