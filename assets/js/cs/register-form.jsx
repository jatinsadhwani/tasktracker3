import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function RegisterForm(props){

    function update(ev){
        let tgt = $(ev.target);
        let data = {};
        data[tgt.attr('name')] = tgt.val(); 
        let action = {
            type: 'UPDATE_REGISTER_FORM',
            data: data,
        }
        props.dispatch(action);
    }

    function submit(ev){
        ev.preventDefault();
        api.submit_user(props.registerform);
    }

    return <div style={{padding:"4ex"}}>
        <h2>New User</h2>
        <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" value={props.registerform.name} onChange = {update}>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" value={props.registerform.password} onChange = {update}/>
        </FormGroup>
        <Button onClick={submit} color = "primary">Create user</Button> &nbsp;
    </div>
}

function state2props(state){
    return{
        registerform: state.registerform,
    };
}

export default connect(state2props)(RegisterForm);