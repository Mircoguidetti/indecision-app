class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinOne = this.handleMinOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count:0
        }
    }

    componentDidMount () {
        const localStorageCount = localStorage.getItem('count');
      
       const count = parseInt(localStorageCount);

       if (!isNaN(count)) {
           this.setState(() =>  ({count}))
       }
        // this.setState(() => {
        //     return {
                
        //     }
        // })
    }

    componentDidUpdate (propsState, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }

    }
    handleAddOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count +1 
            };    
        });
    }
    handleMinOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        });
    }

    handleReset () {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinOne}>-1</button>
                <button onClick = {this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter/>, document.getElementById('app'));