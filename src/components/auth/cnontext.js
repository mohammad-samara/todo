import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const API = 'https://lab32-401.herokuapp.com';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            loggedIn : false,
            login : this.login,
            logout : this.logout,
            sigup: this.signup,
            user : {}
        }
    }

    signup = async (username, password, email, role) => {

        try {
            const results = await fetch(`${API}/signup`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({ username, password, email, role })
            });
            let res = await results.json();
            this.validateToken(res.token);
        } catch (ex) {
            console.log('error');

        }
    }


    login = async(username,password) =>{
        try{
            const results = await fetch(`${API}/signin`,{
                method : 'POST',
                mode : 'cors',
                cache : 'no-cache',
                headers : new Headers({
                    'Authorization':`Basic ${btoa(`${username}:${password}`)}`
                })
            })

            let res = await results.json();
            console.log('res: ', res);
            this.validateToken(res.token);
        } catch(e){
            console.log('error');
        }
    }


    logout = () =>{
        this.setLoginState(false,null,{});
    }

    validateToken = token =>{
        try {
            console.log({token});
            let user = jwt.verify(token,'supersecret');
            console.log('user :', user);

            this.setLoginState(true , token , user);

        } catch(e){
           this.logout();
            console.log('token validation error ');

        }
    }
     // update the state and add the token to the cookie 
    setLoginState = (loggedIn,token,user) => {
        cookie.save('auth',token);
        this.setState({token , loggedIn,user});

    }

    componentDidMount(){
        const cookieToken = cookie.load('auth');
        const token = cookieToken || null;
        this.validateToken(token);
    }

    render(){
        return(
            <LoginContext.Provider value={this.state}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export default LoginProvider;
