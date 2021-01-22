import React, { Component,useState } from 'react'
import '../App.css';

export default class Login extends Component {

constructor(){
    super()
    this.state={
        username:"",
        password:"",
        items: [],
        error: null,
        
    }
   
}
handleChange=(e)=>{
    this.setState({
        [e.target.name]: e.target.value
       
    })}

    handleSubmit=(e)=>{ 
        e.preventDefault()
       
      fetch('http://127.0.0.1:8000/quizer/',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(this.state)
    }).then(this.props.history.push("/section"))
    .then(res=> res.json())
    .then((result)=>{
      this.setState({ items:result});
      console.log(result);
    },
      (error) => {
          this.setState({
          error
          });
        }
    )
    .catch(error=> console.error(error ))
       
    
        
     }

     render() {
      
        return (
          <>
         
          <div className="login">
          <div className="login-header mt-4">
          <h1><b>Login</b></h1>
           </div>
           <form onSubmit={this.handleSubmit}>
          <div className="login-form">
          <h3>Username:</h3>
          <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleChange}/><br/>
          <h3>Password:</h3>
          <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange}/>
          <br/>
          <input className="btn btn-success mt-5 ml-3 mr-5" type="submit"></input>
          <br/>
          
          
        </div>
        </form>
      </div>
      </>
        );
      }
    }

  