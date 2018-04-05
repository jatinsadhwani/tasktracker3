import React from 'react';
import {Button, Card,CardBody} from 'reactstrap';
import api from '../api';
import { connect } from 'react-redux';
import store from '../store';


function Task(params){

    function deleteTask(){
        api.delete_task(params.task);
    }
    function editTask(){
        deleteTask();
        let data = {
            id: params.task.id,
            user: params.task.user,
            description: params.task.description,
            completed: params.task.completed,
            time: params.task.time,
            user_id: params.task.user.id,
            title: params.task.title
        }
        let action = {
            type: 'EDIT_FORM',
            data: data
        }
        store.dispatch(action);
    
    }
    

    let task = params.task;
    return <Card>
        <CardBody>
            <div>
                <p>Assigned to - {task.user.name} </p>
                <p>Title - {task.title}</p>
                <p>Description - {task.description}</p>
                <p>Completed - {task.completed}</p>
                <p>Time - {task.time}</p>
            </div>
            <div>
                <Button color="primary" onClick={editTask}>Change Status</Button>
            </div>
        </CardBody>
    </Card>;
}



export default function Tasks(params){

    let token = params.token
    let user_id;
    if(token){
        user_id = params.token.user_id;    
    }
    else{
        user_id = 0;
    }
    let filtered_tasks = _.filter(params.tasks, (task) => task.user.id == user_id)
    let tasks = _.map(filtered_tasks, (tt) => <Task key={tt.id} task = {tt}/>);

    return <div>
        <p>&nbsp;</p>
        <h1>Your Tasks</h1>
        { tasks }

    </div>
}