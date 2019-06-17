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
class SingleScientist extends Component {
    state = {
        scientist: {
            id:"",
            name: "",
            photo_url: "",
            formulas: [],
            institutes: [{
                name:"null"
            }]

        },
        newformula: [{
            name:"test"
        }],
        newinstitute:[{
            name:"",
            street:"",
            state:"",
            zipcode:"",
        }],
        redirectToHome: false,
        isformulaFormDisplayed: false,
        isinstituteFormDisplayed: false,
        isEditFormDisplayed: false
    }

    componentDidMount = () => {
        axios.get(`/api/v1/scientists/${this.props.match.params.id}`).then(res => {
            this.setState({ scientist: res.data })
            console.log(res.data)

        })
    }
    toggleformulaForm = () => {
        this.setState((state, props) => {
            return ({isformulaFormDisplayed: !state.isformulaFormDisplayed})
        })
    }
    toggleinstituteForm = () => {
        this.setState((state, props) => {
            return ({isinstituteFormDisplayed: !state.isinstituteFormDisplayed})
        })
    }
    deleteScientist = () => {
        axios.delete(`/api/v1/scientists/${this.props.match.params.id}`).then(res => {
            this.setState({ redirectToHome: true })
        })
    }
    createFormula = (e) => {
        e.preventDefault()
        const formula = {...this.state.newformula}
        formula.scientist = this.state.scientist.id;
        axios
            .post(`/api/v1/formulas/`, formula)
            .then(res => {
                const scientist = {...this.state.scientist}
                scientist.formulas.unshift(res.data)
                this.setState({
                    newformula: {
                        name: ''
                    },
                    isformulaFormDisplayed: false,
                    scientist
                })
            })

    }
    createInstitute = (e) => {
        e.preventDefault()
        const institute = {...this.state.newinstitute}
        institute.scientist = this.state.scientist.id;
        console.log(this.state.newinstitute)
        axios
            .post(`/api/v1/institutes/`, institute)
            .then(res => {
                const scientist = {...this.state.scientist}
                scientist.institutes.unshift(res.data)
                this.setState({
                    newinstitute: {
                        name: ''
                    },
                    isformulaFormDisplayed: false,
                    scientist
                })
            })

    }
    handleChange = (e) => {
        const cloneNewformula = { ...this.state.newformula }
        cloneNewformula[e.target.name] = e.target.value
        this.setState({ newformula: cloneNewformula })
        console.log(this.state.newformula)
    }
    handleInstituteChange = (e) => {
        console.log(e.target.name)
        const cloneNewinstitute = { ...this.state.newinstitute }
        cloneNewinstitute[e.target.name] = e.target.value
        this.setState({ newinstitute: cloneNewinstitute })
        //console.log(this.state.newinstitute)
    }
    render() {
        console.log(this.state.scientist.formulas)
        if (this.state.redirectToHome) {
            return (<Redirect to="/api/v1/Scientists" />)
        }


        return (

            <div className='SingleScientist'>
                <Menu>
                    <h1> Single Scientist Information </h1>
                    <p> Published Formulas </p>
                    <div>
                        <Link to="/"> Home </Link>
                    </div>
                    <div>
                        <Link to="/Scientists"> Scientist </Link>
                    </div>
                    <div>
                        <Link to="/Info"> Info </Link>
                    </div>
                </Menu>
                <div>
                    <h2>{this.state.scientist.name}</h2>
                </div>
                <div>
                    <img src={this.state.scientist.photo_url}></img>
                </div>
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
                <button onClick={this.toggleformulaForm}> Add  </button>
                {
                    this.state.isformulaFormDisplayed
                        ? <form onSubmit={this.createFormula}>
                            <div>
                                <label htmlFor="name"> Formula Name </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    placeholder={this.state.newformula.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="name"> Element </label>
                                <input
                                    id="atomic_name"
                                    type="text"
                                    name="atomic_name"
                                    onChange={this.handleChange}
                                    placeholder={this.state.newformula.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="name"> Symbol </label>
                                <input
                                    id="symbol"
                                    type="text"
                                    name="symbol"
                                    onChange={this.handleChange}
                                    placeholder={this.state.newformula.name}
                                />
                            </div>
                            
                            <button>Add Formula</button>
                        </form>
                        : null
                    }              
                        <div>
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
                    <button onClick={this.toggleinstituteForm}> Add  </button>
                {
                    this.state.isinstituteFormDisplayed
                        ? <form onSubmit={this.createInstitute}>
                            <div>
                                <label htmlFor="name"> Institute Name </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    onChange={this.handleInstituteChange}
                                    placeholder={this.state.newinstitute.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="name"> Street </label>
                                <input
                                    id="street"
                                    type="text"
                                    name="street"
                                    onChange={this.handleInstituteChange}
                                    placeholder={this.state.newinstitute.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="name"> State </label>
                                <input
                                    id="state"
                                    type="text"
                                    name="state"
                                    onChange={this.handleInstituteChange}
                                    placeholder={this.state.newinstitute.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="name"> Zipcode </label>
                                <input
                                    id="zipcode"
                                    type="text"
                                    name="zipcode"
                                    onChange={this.handleInstituteChange}
                                    placeholder={this.state.newinstitute.name}
                                />
                            </div>
                            
                            <button>Add Institutes </button>
                        </form>
                        : null
                    } 
                </div>
                <button onClick={this.deleteScientist}>Delete Information </button>
            </div>

        )
    }

}
export default SingleScientist