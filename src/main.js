import ReactDOM from 'react-dom';
import React from 'react';


let My = React.createClass({

    getInitialState(){
        return {
            x: 0,
            textInput: '',
            checkboxInput: false,
            radioInput: false,
        };
    },

    componentDidMount(){
        // setInterval(function () {
        //     this.setState({x: ++this.state.x});
        // }.bind(this), 2000);
    },

    handleChange(e){

        // Assign values to a 'select' that has the 'multiple' attribute.
        let selected = [].slice.call(e.target.selectedOptions).map(o => {
            return o.value;
        });

        this.setState({
            textInput: this.refs.myText.value,
            checkboxInput: this.refs.myCheckbox.checked,
            radioInput: this.refs.myRadio.checked,
            selectInput: selected,
        });
    },

    handleChangeWithoutRefs(e){

        console.log('value del radio', e.currentTarget.value);

        this.setState({
            radioInput: e.currentTarget.value
        });
    },

    render(){

        console.log('rendering');

        return (
            <div>
                <div
                    dangerouslySetInnerHTML={{__html: `First &middot; <span style='background-color:red'>rojiza</span> Second`}}/>
                {/*<input value={this.state.x} type='text'/>*/}

                {/*Text Input*/}
                <input onChange={this.handleChange} value={this.state.textInput} type='text' ref='myText'/>

                {/*Checkbox*/}
                <input onChange={this.handleChange} checked={this.state.checkboxInput} type='checkbox'
                       ref='myCheckbox'/>

                {/*Radio buttons*/}

                <br/>
                <label>
                A <input onChange={this.handleChangeWithoutRefs} value='A' checked={this.state.radioInput === 'A'}
                         type='radio' name='aRadio'
                         ref='myRadio'/>
                </label>
                <label>
                B <input onChange={this.handleChangeWithoutRefs} value='B' checked={this.state.radioInput === 'B'}
                         type='radio' name='aRadio'
                         ref='myRadio'/>
                </label>
                <label>
                C <input onChange={this.handleChangeWithoutRefs} value='C' checked={this.state.radioInput === 'C'}
                         type='radio' name='aRadio'
                         ref='myRadio'/>
                </label>

                {/*Select*/}

                <select onChange={this.handleChange} value={this.state.selectInput} defaultValue={['C', 'A']}
                        multiple={true} ref='mySelect'>
                    <option value='A'>Apple</option>
                    <option value='B'>Banana</option>
                    <option value='C'>Cranberry</option>
                </select>
            </div>
        )
    },
});

ReactDOM.render(
    <My/>,
    document.getElementById('example')
);