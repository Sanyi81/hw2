import {useEffect, useState} from "react";

import User from "../user/User"

function Users () {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
                console.log(value)
            });
    },[]);

    return(
        <div>
            {JSON.stringify(user)}
            {users.map(user => <User user={user} key={user.id}
                                     lift={lift}/>)}
        </div>
    );
}
export default Users;