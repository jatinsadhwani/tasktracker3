import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './nav';
import Tasks from './tasks';
import UserList from './user-list';

export default function tasktracker_init() {
    ReactDOM.render(
        <Tasktracker />,
        document.getElementById('root')
    );
}

class Tasktracker extends React.Component {

    constructor(params){
      super(params)
      this.state = {
        tasks: [],
        users: [],
      }

      this.request_tasks();
      this.request_users();
    }

    request_tasks() {
      $.ajax("api/v1/tasks", {
        method: "get",
        dataType: "json",
        contentType: "application/json; chartset=UTF-8",
        success: (resp) => {
          this.setState(_.extend(this.state, {tasks: resp.data}));
        }
      });
    }

    request_users() {
      $.ajax("api/v1/users", {
        method: "get",
        dataType: "json",
        contentType: "application/json; chartset=UTF-8",
        success: (resp) => {
          this.setState(_.extend(this.state, {users: resp.data}));
        }
      });
    }


    render(){
      return <Router>
        <div>
        <Nav />

        <div class="row">

          <Route path="/" exact={true} render={()=>
          <div className="col">
            <Tasks tasks={this.state.tasks} />
          </div>
        } />

        <Route path="/users" exact={true} render={()=>
          <div className="col">
          <UserList users = {this.state.users} />
          </div>
        } />

        <Route path="/users/:user_id" exact={true} render={({match})=>
          <Tasks tasks = {_.filter(this.state.tasks, (tt) =>
            match.params.user_id == tt.user.id 
           )} />
        } /> 

        </div>

        </div>
      </Router>;    
    }
}