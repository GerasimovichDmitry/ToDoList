import React, {Component} from 'react';
import './CalculatorV2.css'

class CalculatorV2 extends Component {

    constructor() {
        super();
        this.state = {
            result : 0,
            number1 : 10,
            number2 : 5,
            operation : '+'
        };
    }

    showResult(operation,number1,number2){
        let result = 0;
        
        switch (operation) {
            case '+' :
                result = number1 + number2;
                break;
            case '-' :
                result = number1 - number2;
                break;
            default:
                break;
        }
       this.setState({result : result})
    }

    hendleNumber1Change(e){
        let number1 = Number(e.currentTarget.value);
        this.setState({number1 : number1});
        let{number2,operation} = this.state;
        this.showResult(operation,number1,number2);
    }

    hendleNumber2Change(e){
        let number2 = Number(e.currentTarget.value);
        this.setState({number2 : number2});
        this.showResult();
        let{number1,operation} = this.state;
        this.showResult(operation,number1,number2);
    }

    hendleOperationChange(e){
        this.setState({operation : e.currentTarget.value});
        let{number1,number2} = this.state;
        this.showResult(e.currentTarget.value, number1, number2);
    }

    render() {
        return (
            <div className="calculator">
                <input value={this.state.number1} onChange={this.hendleNumber1Change.bind(this)}/>
                <select value={this.state.operation} onChange={this.hendleOperationChange.bind(this)}>
                    <option>+</option>
                    <option>-</option>
                </select>
                <input value={this.state.number2} onChange={this.hendleNumber2Change.bind(this)}/>
                {/*<div>*/}
                    {/*<button onClick={this.showResult.bind(this)}>Get result</button>*/}
                {/*</div>*/}
                <div>
                    Result: <span>{this.state.number1} {this.state.operation} {this.state.number2} = {this.state.result}</span>
                </div>
            </div>
        );
    }
}

export default CalculatorV2;
