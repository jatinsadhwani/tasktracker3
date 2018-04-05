import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavItem, Form, FormGroup, Input, Button } from 'reactstrap';
import api from '../api';


let LoginForm = connect(({login}) => {return {login};})((params) => {
    
    function update(ev){

        ev.preventDefault();


        let tgt = $(ev.target);
        let data = {};
        data[tgt.attr('name')] = tgt.val();
        params.dispatch({
            type: 'UPDATE_LOGIN_FORM',
            data: data,   
        });
    }
    
    function create_token(ev){
        ev.preventDefault();
        api.submit_login(params.login);
    }


    return <div className="navbar-text">
        <Form inline>
            <FormGroup>
                <Input type="text" name="name" placeholder="name"
                    value={params.login.name} onChange={update}/>
            </FormGroup>
            <Input type="password" name="pass" placeholder="password"
                    value={params.login.pass} onChange={update}/>
            <FormGroup>
                
            </FormGroup>
            <Button color="secondary" onClick={create_token}>Log in</Button>
        
        </Form>
    </div>;

});


let Session = connect(({token}) => {return {token};})((params) => {

    return <div className = "navbar-text">
        User id = {params.token.user_id}
    </div>;

});


function Nav(params){
    let session_info;
    if(params.token){
        session_info = <div>
            <Session />;
            <Button color="primary" onClick={logout}>Log out</Button>
            </div>
    }
    else{
        session_info = <LoginForm />
    }

    function logout(){
        params.dispatch({
            type: 'LOGOUT',
            token: null,

        });
    }

    return <nav className="navbar navbar-dark bg-dark navbar-expand">
        <span className="navbar-brand">
          Task Tracker
        </span>
        <ul className="navbar-nav mr-auto">
         <NavItem>
            <NavLink to ="/" exact={true} activeClassName="active" className="nav-link">
                Tasks
            </NavLink>
         </NavItem>
         <NavItem>
            <NavLink to ="/users" exact={false} activeClassName="active" className="nav-link">
                Users
            </NavLink>
         </NavItem>
        </ul>
        { session_info }
      </nav>;
}

function state2props(state){
    return {token: state.token};
}
        
export default connect(state2props)(Nav);