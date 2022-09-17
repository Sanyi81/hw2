function User({user, lift}) {

    return (
        <div>
            <h2>{user.id} - {user.name}</h2>

            <button onClick = {()=> {
                lift(user);
            }} >Details</button>
        </div>
    );
}
export default User;