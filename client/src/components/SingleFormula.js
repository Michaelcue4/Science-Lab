import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom';
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
class SingleFormula extends Component{
    state = {
        formula: {
          name:"",
          atomic_name:"",
          symbol:"",
        },
        newElement:{
            atomic_name:"",
            symbol:""

        },
        redirectToHome: false,
        isEditFormDisplayed: false
    }
  
    componentDidMount = () => {
        axios.get(`/api/v1/formulas/${this.props.match.params.id}`).then(res => {
            this.setState({formula: res.data})

        })
    }
    deleteScientist = () => {
        axios.delete(`/api/v1/formulas/${this.props.match.params.id}`).then(res => {
            this.setState({redirectToHome: true})
        })
    }   ; 
    render() {
        if(this.state.redirectToHome) {
            return (<Redirect to="/api/v1/Scientists" />)
        }
        

        return (
            
            <div className ='SingleScientist'>
                <Menu>
                <h1> Single Scientist Information </h1>
                <p> Published Formulas </p>
                <div>
                <Link to ="/"> Home </Link>
                </div>
                <div>
                <Link to ="/Scientists"> Scientist </Link>
                </div>
                <div>
                <Link to ="/Info"> Info </Link>
                </div>
                </Menu>
                <h3>{this.state.formula.name}</h3>
                <div>
                <Link to={`/elements/${this.state.formula.atomic_name}`}>
                    {this.state.formula.atomic_name}
                    </Link> 
                {/* <Link to={{pathname: '/elements/show', state:{name:this.state.formula.atomic_name}}} value="test"/>  */}
                <p>
                {this.state.formula.symbol}
                </p>
                </div>

                
                <button onClick={this.deleteScientist}>Delete Information </button>
                <div><Link to ="/Scientists"> View Scientist </Link></div>
            </div>
            
                )
            }
    
}
export default SingleFormula 