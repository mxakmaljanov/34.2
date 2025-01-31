import React from 'react'
import './index.css'

function User(props) {
    const { user } = props
    console.log('user', user);

    return (
        <div className='user-card'>
            <img src={user.image} />
            <h3>firstName : {user.firstName}<br />
                lastName : {user.lastName}</h3>
            <h4>email : {user.email}<br />
                phone : {user.phone}
            </h4>
            <h4>
                address: {user.address.zip}
                <br />
                cars : {user.cars}
            </h4>

        </div>
    )
}

export default User