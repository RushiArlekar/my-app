import React, { Component } from 'react'
import './Search.css'
import List from './List'

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchValue:''
        }
        this.updateValue=this.updateValue.bind(this)
    }

    updateValue(event){
        this.setState({
            searchValue : event.target.value
        })
        //console.log(this.state.searchValue)
    }
    
    render() {
        return (
            <div>
                <input className='Input-Text' type='text' value={this.state.searchValue} onChange={this.updateValue}/>
                <input className='Button-Input' type='submit'value='search' onClick={() => this.props.getValue(this.state.searchValue)}/>
            </div>
        )
    }
}

export default Search
