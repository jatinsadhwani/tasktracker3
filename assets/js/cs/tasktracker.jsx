import React from 'react';
import ReactDOM from 'react-dom';
import { Provider,connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './nav';
import Tasks from './tasks';
import UserList from './user-list';
import TaskForm from './task-form';

export default function tasktracker_init(store) {
    ReactDOM.render(
      <Provider store={store}>
        <Tasktracker />
      </Provider>,
        document.getElementById('root')
    );
}

let Tasktracker = connect((state) => state)((props) =>  {
      return <Router>
        <div>
        <Nav />

        <div class="row">

          <Route path="/" exact={true} render={()=>
          <div className="col">
            <TaskForm users={props.users} />
            <Tasks tasks={props.tasks} />
          </div>
        } />

        <Route path="/users" exact={true} render={()=>
          <div className="col">
          <UserList users = {props.users} />
          </div>
        } />

        <Route path="/users/:user_id" exact={true} render={({match})=>
          <Tasks tasks = {_.filter(props.tasks, (tt) => {
              if(tt.user) {
                return match.params.user_id == tt.user.id;
              }
              else{
                return false;
              } 
           } )} />
        } /> 

        </div>

        </div>
      </Router>;    
});