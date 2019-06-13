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
class Scientists extends Component{
    state = {
        scientists: [],
        newscientist: {
            name: '',
        }, 
        isscientistFormDisplayed: false 
        }
        componentDidMount = () => {
            axios.get('api/scientists').then(res => {
                this.setState({scientists: res.data})
            })
          }
          togglescientistForm = () => {
            this.setState((state, props) => {
                return ({isscientistFormDisplayed: !state.isscientistFormDisplayed})
            })
        }
      
        handleChange = (e) => {
          const cloneNewscientist = {...this.state.newscientist}
          cloneNewscientist[e.target.name] = e.target.value
          this.setState({newscientist: cloneNewscientist})
        }
      
        createscientist = (e) => {
          e.preventDefault()
          axios
              .post('api/v1/scientists', {
                  name: this.state.newscientist.name,
              })
              .then(res => {
                  const scientistList = [...this.state.scientists]
                  scientistList.unshift(res.data)
                  this.setState({
                      newscientist: {
                          name: ''
                      },
                      isscientistFormDisplayed: false,
                      scientists: scientistList
                  })
              })
      
        }
    render() {
        

        return (
            
            <div className ='Scientsts'>
                <Menu>
                <h1> Scientists  </h1>
                <p> List of Individual Scientists and what kind of formulas they have created </p>
                <div>
                <Link to ="/"> Home </Link>
                </div>
                <div>
                <Link to ="/Info"> Info </Link>
                </div>
                </Menu>
            </div>
            
                )
            }
    
}
export default Scientists