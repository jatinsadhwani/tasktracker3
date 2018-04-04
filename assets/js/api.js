import store from './store';

class TheServer {
    request_tasks() {
        $.ajax("api/v1/tasks", {
          method: "get",
          dataType: "json",
          contentType: "application/json; chartset=UTF-8",
          success: (resp)  => {
            store.dispatch({
                type: 'TASKS_LIST',
                tasks: resp.data,

            });
          }
        });
      }
  

      submit_tasks(data) {
        $.ajax("api/v1/tasks", {
          method: "post",
          dataType: "json",
          contentType: "application/json; chartset=UTF-8",
          data: JSON.stringify({task: data}),
          success: (resp)  => {
            store.dispatch({
                type: 'ADD_TASK',
                task: resp.data,

            });
          }
        });
      }

      request_users() {
        $.ajax("api/v1/users", {
          method: "get",
          dataType: "json",
          contentType: "application/json; chartset=UTF-8",
          success: (resp) => {
            store.dispatch({
                type: 'USERS_LIST',
                users: resp.data,

            });
          }
        });
      }
};

export default new TheServer();