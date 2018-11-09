class IndecisonApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount () {
        try {
            const localStorageOptions = localStorage.getItem('options');
            const options = JSON.parse(localStorageOptions);

            if(options){
                this.setState(() => ({options}))
            }
        } catch(e) {

        }
    }
    
    componentDidUpdate (prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOptions () {
        this.setState (() => ({options: []}));
    }

    handleDeleteOption (optionToDelete) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToDelete !== option)
        }));
    }
    handlePickOption () {
        const randomOption = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomOption]; 
        alert(option)
    }
    handleAddOption (option) {
        if(!option) {
            return 'Please enter a valid value'
        }else if (this.state.options.indexOf(option) > -1){
            return 'The option already exists'
        }

        this.setState((prevState) => ({options:prevState.options.concat(option)}));
    }
    render() {
        
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle = {subtitle}/>
                <Action 
                hasOptions = {this.state.options.length > 0}
                handlePickOption = {this.handlePickOption}
                /> 
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption handleAddOption = {this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}


const Action = (props) => {
    return (
        <div>
            <button 
                onClick = {props.handlePickOption} 
                disabled = {!props.hasOptions}
            > 
            What should I do ?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick = {props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0  &&  <p>Please add an option to get started!</p>}
            <ol>
                {
                    props.options.map((option) => {
                        return <Option 
                        key={option} 
                        optionText = {option}
                        handleDeleteOption = {props.handleDeleteOption}
                        />
                    })
                }
            </ol>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <li>{props.optionText}</li>
            <button 
            onClick = {(e) => {
                props.handleDeleteOption(props.optionText)
            }}
            > 
            remove
            </button>
        </div>
    );
}



class AddOption extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption (e) {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option)
        e.target.option.value = ''

        this.setState(() => ({error}));
       
    }
   
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.handleAddOption}>
                    <input type= 'text' name = 'option' placeholder= 'Type your option' autoComplete = 'off' />
                    <button> Add option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisonApp/>, document.getElementById('app'));














