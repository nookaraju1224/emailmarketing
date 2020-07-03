import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  state = {
    isLoading: false,
    greeting: ""
  };
  sayHello = async (event) => {
    event.preventDefault();
    let response = await fetch('/greeting?name=' + this.state.greeting);
    let body = await response.json();
    this.setState({ greeting: body.name, isLoading: false, isGreetingVisible: '' });
  }
  updateName = (event) => {
    event.preventDefault();
    this.setState({greeting: event.target.value, isLoading: false});
  }
  render() {
    const {greeting, isLoading} = this.state;
    if (isLoading) {
    return 
;
    }
    return (
	<div id="main-wrapper">

        <div class="unix-login">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-4">
                        <div class="login-content card">
                            <div class="login-form">
                                <h4>Login</h4>
                                <form action="dashboardSuperadmin.html"> 
                                    <div class="form-group">
                                        <label>Email address</label>
                                        <input type="email" class="form-control" onChange={(event)=>this.updateName(event)} placeholder="Enter Your Name"/>
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input type="password" class="form-control" placeholder="Password"/>
                                    </div>
                                    <div class="checkbox">
                                        <label>
        										<input type="checkbox"/> Remember Me
        									</label>
                                        <label class="pull-right">
        										<a href="#">Forgotten Password?</a>
        									</label>

                                    </div>
                                    <button type="submit" class="btn btn-primary btn-flat m-b-30 m-t-30" >Sign in</button>
                                    <div class="register-link m-t-15 text-center">
                                        <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
									<h2 style={{visibility: this.isGreetingVisible}}>Hello {this.state.greeting}</h2>
								   </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
	);
  }
}
export default App;