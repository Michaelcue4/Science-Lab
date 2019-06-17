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
class SingleScientist extends Component{
    state = {
        scientist: {
          name:"",
          photo_url:"",
          formulas:[],
          institutes:[]

        },
        redirectToHome: false,
        isEditFormDisplayed: false
    }
  
    componentDidMount = () => {
        axios.get(`/api/v1/scientists/${this.props.match.params.id}`).then(res => {
            this.setState({scientist: res.data})

        })
    }
    deleteScientist = () => {
        axios.delete(`/api/v1/scientists/${this.props.match.params.id}`).then(res => {
            this.setState({redirectToHome: true})
        })
    }
    handleChange = (e) => {
        const cloneNewscientist = {...this.state.newscientist}
        cloneNewscientist[e.target.name] = e.target.value
        this.setState({newscientist: cloneNewscientist})
      }
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
                <div>
                <h2>{this.state.scientist.name}</h2>
                </div>
                <div>
                <img src ={this.state.scientist.photo_url}></img></div>
                <h3>Formulas</h3>
                <div>
                     <ul>
                    {this.state.scientist.formulas.map(formula => (
                        <li>
                        <Link to={`/formulas/${formula.id}`}>{formula.name}</Link>
                        </li>
                    ))}
                    </ul>
                    
                </div>
                <div>
                    {/* <Link to = "/institue/:id">
                        {this.state.scientist.institutes}
                    </Link> */}
                </div>
                <h4>Institutes</h4>
                <div>
                     <ul>
                    {this.state.scientist.institutes.map(institute => (
                        <li>
                        <Link to={`/institutes/${institute.id}`}>{institute.name}</Link>
                        </li>
                    ))}
                    </ul>
                    
                </div>
                <button onClick={this.deleteScientist}>Delete Information </button>
            </div>
            
                )
            }
    
}
export default SingleScientist