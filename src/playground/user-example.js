let user = {
    username: 'Mirco',
    age: 18,
    options: []

};

const template = (
    <div>
        <h1>{user.username}</h1>
        <p>Age: {user.age > 18 ? user.age: undefined}</p>
        <p>{ user.options.length > 0 ? 'Here is your options': 'No options' }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    
    </div>
)

const appRoute = document.getElementById('app');

ReactDOM.render(template, appRoute);

