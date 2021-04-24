import React from 'react';
import './form.css';
import Audit from './Audit';


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.data = 'form';
        this.state = {
            name: '',
            degree: '',
            advisor: '',
        };

        this.handleInputChange  = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.data = 'audit';
        event.preventDefault();
    }

    render() {

        if (this.data === 'form') {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="formcontainer">
                        <ul>
                            <li>
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </li>
                            <li>
                                <label htmlFor='degree'>Degree:</label>
                                <select name="degree" value={this.state.degree} onChange={this.handleInputChange}>
                                    <option value="BS Computer Science">BS Computer Science</option>
                                    <option value="BS Physics">BS Physics</option>
                                    <option value="BA Mathematics">BA Mathematics</option>
                                    <option value="BA Computer Science">BA Computer Science</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor='advisor'>Advisor:</label>
                                <select name="advisor" value={this.state.advisor} onChange={this.handleInputChange}>
                                    <option value="Dr. Hussain">Dr. Hussain</option>
                                    <option value="Dr. Qian">Dr. Qian</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </li>
                            <li className="button">
                                <button type="submit">Submit</button>
                            </li>
                        </ul>
                        </div>
                    </form>
                </div>
            );
        } else if (this.data === 'audit') {
            return(
                <Audit></Audit>
            );
        }
    }
}
