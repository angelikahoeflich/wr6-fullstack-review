import Axios from 'axios';
import e from 'express';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../redux/reducer';

class Auth extends Component{
  constructor(){
    super()

    this.state = {
      email: '',
      username: '',
      password: '',
      newUser: false
    }
    
  }
      toggleNewUser = () => {
        this.setState({
          newUser: !this.state.newUser
        })
      }
      changeHandler = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      login = async() => {
        e.preventDefault();
        const {email, password} = this.state;
        try{
          const user = await Axios.post('/auth/login', {email,password})
          this.props.loginUser(user.data);
          this.props.history.push('/feed')
        } 
        catch(err){
            alert(err.response.request.response)
        }
      }

      register = async (e) => {
        e.preventDefault();
        const {email, password, username} = this.state;
        try{
          const user = await Axios.post('/auth/register', {email, username, password})
          this.props.loginUser(user.data);
          this.props.history.push('/feed')
        } 
        catch(err){
            alert(err.response.request.response)
        }
      }

  render(){
    const {email, password, username} = this.state;
    return(
      <div>
      {this.state.newUser ? 
        <div>
          <h3>Register</h3>
          <form onSubmit = {e => this.register(e)}>
            <input 
            name= 'email' value='email' placeholder='email' onChange={e => this.changeHandler(e)} />
            <input 
            name= 'username' value='username' placeholder='username' onChange={e => this.changeHandler(e)} />
            <input 
            name= 'password' value='password' 
            type='password'
            placeholder='password' onChange={e => this.changeHandler(e)} />
           <button>Submit</button>
          </form>
          <button onClick= {this.toggleNewUser}>Already a user?</button>
        </div>
        :
        <div>
         <h3>Login</h3>
         <form onSubmit={e => this.login(e)}>
            <input 
            name= 'email' value='email' placeholder='email' onChange={e => this.changeHandler(e)} />
            <input 
            name= 'password' value='password' 
            type='password'
            placeholder='password' onChange={e => this.changeHandler(e)} />
           <button>Submit</button>
          </form>
          <button onClick= {this.toggleNewUser}>Need an account?</button>
        </div>
      }
      </div>
    )
  }
}


const mapStateToProps = state => state
export default connect(mapStateToProps, {loginUser})(Auth)

