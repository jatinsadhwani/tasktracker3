import {createStore, combineReducers} from 'redux';
import deepFreeze from 'deep-freeze';


/*
    Our state:

    {
        users: [...users...],
        tasks: [...tasks....],
        form: {
            user_id: number,
            title: string
            description : string
            completed: boolean
            time: number
        }
    }


*/

function users(state = [],action){
    switch (action.type){
        case 'USERS_LIST':
            return [...action.users];
        
        default:
            return state;
    }
}

function tasks(state = [],action){
    switch (action.type){
        case 'TASKS_LIST':
            return [...action.tasks];
        case 'ADD_TASK':
            return [action.task,...state];
        default:
            return state;
    }
}

let empty_form = {
    user_id: "",
    title: "",
    description: "",
    completed: "",
    time: "",
};

function form(state = empty_form,action){
    switch(action.type){
        case 'UPDATE_FORM':
            return Object.assign({},state,action.data);
        default:
            return state;
    }
}


function root_reducer(state0,action){

    console.log("state0",state0);
    console.log("action",action);
    let reducer = combineReducers({users,tasks,form});
    let state1 = reducer(state0,action);

    console.log("state1",state1);

    return deepFreeze(state1);
}

let store = createStore(root_reducer);
export default store;