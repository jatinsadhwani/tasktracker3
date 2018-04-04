import React from 'react';
import {Card,CardBody} from 'reactstrap';

function Task(params){
    let task = params.task;
    let completed;
    if(task.completed == true){
        completed = "true";
    }
    else 
    {
        completed = "false";
    }
    return <Card>
        <CardBody>
            <div>
                <p>Assigned to - {task.user.name} </p>
                <p>Title - {task.title}</p>
                <p>Description - {task.description}</p>
                <p>Completed - {completed}</p>
                <p>Time - {task.time}</p>
            </div>
        </CardBody>
    </Card>;
}



export default function Tasks(params){

    

    let tasks = _.map(params.tasks, (tt) => <Task key={tt.id} task = {tt}/>);

    return <div>
        <p>&nbsp;</p>
        <h1>Your Tasks</h1>
        { tasks }


    </div>
}