import React from 'react';
import {Link} from 'react-router-dom';

export default function UserList(params){

    let users = _.map(params.users, (uu) =>
        <h3>
            {uu.name}
        </h3>);

    return <div>
        <p>&nbsp;</p>
        <h1>All Users</h1>
                { users }
    </div>
}