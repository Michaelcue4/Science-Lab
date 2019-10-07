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
class ElementDetail extends Component{
    state = {
        element: {
            atomicMass:"",
            atomicNumber:"",
            atomicRadius:"",
            boilingPoint:"",
            bondingType:"",
            electronAffinity:"",
            electronegativity:"",
            name:"",
            symbol:"",
            yearDiscovered:"",
            standardState:""
        }
    }
    componentDidMount = () => {
        axios.get(`/api/v1/elements/${this.props.match.params.atomic_name}`).then(res => {
            this.setState({element: res.data})
            

        })
    }
    render() {
        console.log(this.state.element)
        

        return (
            <div>
                <div className ='Info'>
                    <Menu>
                    <h1> Element   Detail </h1>
                    <p> Testing page </p>
                    <div>
                    <Link to ="/"> Home </Link>
                    </div>
                    <div>
                    <Link to ="/Scientists"> Scientist </Link>
                    </div>
                    </Menu>
                </div>
                
                <div className = 'apicolor'>
                    <ul>
                    <li>Name : {this.state.element.name}</li>
                    <li>Symbol: {this.state.element.symbol}</li>

                    <li>Atomic Mass:{this.state.element.atomicMass}</li>
                    
                    <li>Atomic Number:{this.state.element.atomicNumber}</li>
                    <li>Atomic Radius:{this.state.element.atomicRadius}</li>
                    <li>Boiling Point:{this.state.element.boilingPoint}</li>
                    <li>Bonding Type:{this.state.element.bondingType}</li>
                    <li>Electron Affinity:{this.state.element.electronAffinity}</li>
                    <li>Electron Negativity:{this.state.element.electronegativity}</li>
                    <li>Year Discovered:{this.state.element.yearDiscovered}</li>
                    <li>Standard State:{this.state.element.standardState}</li>
                    </ul>
                </div>
            </div>
                )
            }
    
}
export default ElementDetail