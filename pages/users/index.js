import {useEffect} from "react";

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/users");
    const data = await res.json();

    return {
        props: {users: data}
    }
}

const Users = (users) => {
    useEffect(()=> {
        console.log(users);
    })
    return (
        <div>
            <h1>Users</h1>
            {/*{users.map(user => (*/}
            {/*    <p>{user.id}</p>*/}
            {/*    ))}*/}
            {
                Object.values(users.users).map(item => (
                    <p>{item.name}</p>
                    )
                )
            }
        </div>
    );
}

export default Users;