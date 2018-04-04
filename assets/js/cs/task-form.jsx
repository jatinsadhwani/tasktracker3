import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function TaskForm(props){

    function update(ev){
        let tgt = $(ev.target);
        let data = {};
        data[tgt.attr('name')] = tgt.val();
        let action = {
            type: 'UPDATE_FORM',
            data: data,
        }
        props.dispatch(action);
    }

    function clear(){
        props.dispatch({type: 'CLEAR_FORM'});
    }


    function submit(){
        api.submit_task(props.form);
        clear();
    }

    let users = _.map(props.users, (uu) =>
    <option key={uu.id} value={uu.id}>{uu.name}</option>);
    return <div style={{padding:"4ex"}}>
        <h2>New Task</h2>
        <FormGroup>
            <Label for="user_id">User</Label>
            <Input type="select" name="user_id" value={props.form.user_id} onChange = {update}>
                <option></option>
                {users}
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="title">Title</Label>
            <Input type="textbox" name="title" value={props.form.title} onChange = {update}/>
        </FormGroup>
        <FormGroup>
            <Label for="description">Description</Label>
            <Input type="text" name="description" value={props.form.description} onChange = {update}/>
        </FormGroup>
        <FormGroup>
            <Label for="completed">Completed</Label>
            <Input type="text" name="completed" value={props.form.completed} onChange = {update}/> 
        </FormGroup>
        <FormGroup>
            <Label for="time">Description</Label>
            <Input type="number" name="time" step="15" min="0" value={props.form.time} onChange = {update}/>
        </FormGroup>
        <Button onClick={submit} color = "primary">Create task</Button> &nbsp;
        <Button onClick={clear}>Clear</Button>
    </div>
}



function state2props(state){
    return{
        form: state.form,
    };
}

export default connect(state2props)(TaskForm);