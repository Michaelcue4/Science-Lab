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
            photo_url: '',
            formulas:[],
            institutes:[]
        }, 
        isscientistFormDisplayed: false 
        }
        componentDidMount = () => {
            axios.get('api/v1/scientists').then(res => {
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
              .post('api/v1/scientists/', {
                  name: this.state.newscientist.name,
                  photo_url: this.state.newscientist.photo_url
              })
              .then(res => {
                  const scientistList = [...this.state.scientists]
                  scientistList.unshift(res.data)
                  this.setState({
                      newscientist: {
                          name: '',
                          photo_url: ''
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
                {
                     this.state.scientists.map(scientists => {
                        return (
                        <div className = 'middleName'>
                        
                            <div key={scientists._id}>
                                <Link
                                    to={`/api/v1/scientists/${scientists.id}`}
                                >
                                    {scientists.name}
                                </Link>
                            </div>
                        </div>
                        )
                    })
                } <div className = 'button'>
                <button onClick={this.togglescientistForm}> Add Scientist </button>
                {
                    this.state.isscientistFormDisplayed
                        ? <form onSubmit={this.createscientist}>
                            <div>
                                <label htmlFor ="name"> Name </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.newscientist.name}
                                />
                                <div>
                            <label htmlFor="photo_url">Add Photo</label>
                            <input
                                id="photo_url"
                                type="text"
                                name="photo_url"
                                onChange={this.handleChange}
                                value={this.state.newscientist.photo_url}
                            />
                        </div>
                            </div>
                            
                            <button>Create</button> 
                        </form>
                       
                        
                        : null
                } </div>
            </div>
                )
                
            }
    
}
export default Scientists