import React from 'react'
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisonApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

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

    handleClearSelectedOption = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        })
    }
    handleDeleteOptions = () => {
        this.setState (() => ({options: []}));
    }

    handleDeleteOption = (optionToDelete) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToDelete !== option)
        }));
    }
    handlePickOption = () => {
        const randomOption = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomOption]; 
        this.setState(() => {
            return {
                selectedOption: option
            }
        })
    }
    handleAddOption = (option) => {
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
                    <div className = 'container'>
                        <Action 
                            hasOptions = {this.state.options.length > 0}
                            handlePickOption = {this.handlePickOption}
                        /> 
                        <div className = 'widget'>
                            <Options 
                                options = {this.state.options}
                                handleDeleteOptions = {this.handleDeleteOptions}
                                handleDeleteOption = {this.handleDeleteOption}
                            />
                            <AddOption handleAddOption = {this.handleAddOption} />
                        </div>
                        <OptionModal 
                            selectedOption = {this.state.selectedOption}
                            handleClearSelectedOption = {this.handleClearSelectedOption}
                        />
                    </div>
            </div>
        );
    }
}
