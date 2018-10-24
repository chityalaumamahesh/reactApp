import React, {Component} from 'react';
class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: 'coconut',
            isGoing: true,
            numberOfGuests: 2
    };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.selectChange = this.selectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){this.setState({value:event.target.value});
        console.log("on changes",this.state.value)
    }
    selectChange(event){this.setState({value:event.target.value});
        console.log("selection on changes>>>>>>>",event.target.value)
    }
    //handling multiple inputs with controlled components
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value
        })
        console.log("multiple value",value)
    }
    handleSubmit(event){
        alert('A name was submitted .' + this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    Essay: <textarea value={ this.state.value} onChange={this.handleChange}/>
                </label><br/>
                <label>
                    Pick your favorite flavor:
                    <select  value={this.state.value} onChange={this.selectChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    </label><br/>
                    <label>
                        Is going:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label><br/>
                        <label>
                            Number of guests:
                            <input
                                name="numberOfGuests"
                                type="number"
                                value={this.state.numberOfGuests}
                                onChange={this.handleInputChange} />
                            </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default NameForm;