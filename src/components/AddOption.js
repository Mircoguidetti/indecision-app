import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.option.value = '';

        this.setState(() => ({error}));
       
    }
    render() {
        return (
            <div>
                {this.state.error && <p className = 'add-option-error'>{this.state.error}</p>}
                <form className = 'add-option' onSubmit = {this.handleAddOption}>
                    <input className = 'add-option__input' type= 'text' name = 'option' placeholder= 'Type your option' autoComplete = 'off' />
                    <button className = 'button'> Add option</button>
                </form>
            </div>
        );
    }
}