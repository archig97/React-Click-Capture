import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
           
            
        };
    }
    
    /*getStyleIncrease=(e) => {
        
        
            return{
                backgroundColor: 'yellow'
                
                }
         }
         getStyleDecrease=(e) => {
        
        
            return{
                backgroundColor: 'orange'
                
                }
         }
    */
   
    
    increaseCount=(e) =>{
       
       
        
          
          this.setState({
              count: this.state.count+1,
              
        })
      }
      
      decreaseCount=(e) =>{
       
       
        this.setState({
            count: this.state.count-1,
            
      })
    }
    setToZero=(count) =>{
       
        
        this.setState({
            count: this.state.count-this.state.count
      })
    }
   
    render() {
        
        
        const btnStyle={
            textAlign: 'center',
            width: '50px',
            height: '50px',
            backgroundColor: 'red',
            color: 'white'

        }
        const cardStyle={
            textAlign: 'center',
            fontSize:'70px',
            width: '100px',
            height: '100px',
            
           backgroundColor: 'blue',
            color: 'black'

        }
        return (
            
            <div>
                <h1>REACT COUNTER</h1>
                <p style={cardStyle} id="card">{this.state.count}</p>
                <button style={btnStyle} onClick={this.increaseCount} >+</button>
                <button style={btnStyle} onClick={this.setToZero}>R</button>
                <button style={btnStyle} onClick={this.decreaseCount} >-</button>

                
            </div>
        )
    }
   
}

export default Counter;
