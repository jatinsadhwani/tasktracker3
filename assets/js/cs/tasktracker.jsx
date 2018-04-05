import React from 'react';
import ReactDOM from 'react-dom';
import { Provider,connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './nav';
import Tasks from './tasks';
import UserList from './user-list';
import TaskForm from './task-form';
import RegisterForm from './register-form';

export default function tasktracker_init(store) {
    ReactDOM.render(
      <Provider store={store}>
        <Tasktracker />
      </Provider>,
        document.getElementById('root')
    );
}

function IfRoute(params){
    let token = params.token;
    if(token){
      return <Route path="/" exact={true} render={()=>
        <div className="col">
          <TaskForm users={params.users} />
          <Tasks tasks={params.tasks} token={params.token} />
        </div>
      } />;
    }
    else
    {
      return <Route path="/" exact={true} render={()=>
        <div className="col">
          <RegisterForm />

        </div>
      } />
    }
}

let Tasktracker = connect((state) => state)((props) =>  {
      return <Router>
        <div>
        <Nav />

        <div class="row">

          <IfRoute token={props.token} users={props.users} tasks={props.tasks}/>


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