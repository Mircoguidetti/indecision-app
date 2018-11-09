console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put yout life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.option.value;

    if (option) {
        app.options.push(option);
        e.target.option.value = '';
        console.log(app.options);
    }
    renderTemplate();
};

const removeAll = () => {
    app.options = [];

    renderTemplate();
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option);
}


const appRouter = document.getElementById('app');


const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p> {app.options.length > 0 ? 'Here the options:': 'No options'}</p>
            <button onClick = {removeAll}>Remove all</button>
            <button disabled = {app.options.length === 0 } onClick= {makeDecision}>What should i do ?</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                } 
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type='text' placeholder= "Add a new option" name='option' autoComplete='off'/>
                <button> Add option</button>
            </form>
        </div>
    ) 

ReactDOM.render(template, appRouter);
};

renderTemplate();

