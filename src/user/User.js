// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете
// детальну інфомацію про користувача(довільно обрану інформацію)

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