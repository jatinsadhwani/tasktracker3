import React from 'react';
import {Card,CardBody} from 'reactstrap';

function Task(params){
    let task = params.task;
    return <Card>
        <CardBody>
            <div>
                <p>Assigned to.. </p>
                <p>{task.title}</p>
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