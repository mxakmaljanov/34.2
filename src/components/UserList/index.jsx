import React from 'react'
 import User from './User'
import User from '../User';

import './index.css';


function UserList(props) {
    const { users } = props
     console.log('sdc', users);
    

    return (
        <div>
            { userliast }
            {
                users.length > 0 && users.map(function (user,index) {
                    return <User key={index} user = {user}/>
                })
            }
        </div>
    )   
}

export default UserList