import React, { Component } from 'react';

export default class TodoApp extends Component{
    render(){

        return(
            <div className="ToDoApp">
                My ToDo Application!
                <LoginComponent/>
            </div>
        );
    }

}
class LoginComponent extends Component{
    render(){

        return(
            <div>
            User Name: <input type="text" name="username"/>
            Password: <input type="password" name="password"/>
            <button>Login</button>
            </div>
        )
    }
}