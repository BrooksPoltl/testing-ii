
import React from 'react'
import Display from './display'

class DashBoard extends React.Component {
    state = {
        balls: 0,
        strike: 0,
    }
     strikeCall = () => {
        this.setState({strike: this.state.strike + 1 })
        if(this.state.strike === 2){
            this.setState({strike: 0, balls: 0})
        }
    }
    ballHandler =() =>{
        this.setState({balls: this.state.balls + 1})
        if(this.state.balls === 3){
            this.setState({strike: 0, balls: 0})
        }
    }
    hit =() =>{
        this.setState({strike: 0, balls: 0})
    }
    foul = () =>{
        if(this.state.strike < 2){
            this.setState({strike: this.state.strike + 1})
        }
    }

    render() {
        return(
            <div>
                <Display data-testid = 'display' balls = {this.state.balls} strikes = {this.state.strike}/>
                <div data-testid = 'dashboard'>
                    <button data-testid = 'strike' onClick = {this.strikeCall}>Strike</button>
                    <button data-testid = 'ball' onClick = {this.ballHandler}>Ball</button>
                    <button data-testid = 'foul' onClick = {this.foul}>Foul</button>
                    <button data-testid = 'hit' onClick = {this.hit}>Hit</button>
                </div>
            </div>
        )
    
    }
}

export default DashBoard