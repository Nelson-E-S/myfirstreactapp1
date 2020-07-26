import React, { Component } from 'react';
import * as math from 'mathjs'; //npm install mathjs in the root of the react [or any other] project your working with to use it

class Calculator extends Component{
    constructor(props){
        super(props); 
        this.state = {
            value: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleClick(val){
        if(val.target.value.toString() === "C")
            this.setState({value: ""});
        else if(val.target.value.toString() === "="){
            // using eval is bad so this won't work for us: eval(this.state.value)
            // slightly safer:Function('"use strict";return (' + this.state.value + ')')()
            // safest method specifically using mathjs library [or other safe 3rd party library]
            //using try catch like below is okay but better to use error boundary components: https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
            try{
            this.setState({value: math.evaluate(this.state.value)});
            }catch{
                alert("Invalid input expression, please try again");
                this.setState({value: ""});
            }
        }
        else
            this.setState({value: this.state.value + val.target.value.toString()});
    }
    handleKeyPress(btn){
        if(btn.key.match(/\d|\+|\-|\*|\/|\./)?true:false)
            this.setState({value: this.state.value + btn.key.toString()});
        if(btn.key.match("Enter")){
            //using try catch like below is okay but better to use error boundary components: https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
            try{
                this.setState({value: math.evaluate(this.state.value)});
            }catch{
                alert("Invalid input expression, please try again");
                this.setState({value: ""});
            }
        }
        if(btn.key.match(/C|c/))
            this.setState({value: ""});
    }
    componentDidMount(){
        document.addEventListener("keypress",this.handleKeyPress,false)
    }
    componentWillUnmount(){
        document.removeEventListener("keypress",this.handleKeyPress,false)
    }
    render(){
        //note, you'll see me style tag below, not best practice, only meant for submitting this component as an compact HW assignment
        return(
            <form name="Calc">
            <table>
                    <tbody>
                    <tr>
                        <td colSpan="3"><input type="text" name="Input" value={this.state.value} placeholder="0" readOnly/></td>
                        <td><input type="button" name="clear" value="C" onClick={this.handleClick} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" name="seven" value="7" onClick={this.handleClick} /></td>
                        <td><input type="button" name="eight" value="8" onClick={this.handleClick} /></td>
                        <td><input type="button" name="nine" value="9" onClick={this.handleClick} /></td>
                        <td><input type="button" name="slash" value="/" onClick={this.handleClick} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" name="four" value="4" onClick={this.handleClick} /></td>
                        <td><input type="button" name="five" value="5" onClick={this.handleClick} /></td>
                        <td><input type="button" name="six" value="6" onClick={this.handleClick} /></td>
                        <td><input type="button" name="minus" value="-" onClick={this.handleClick} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" name="one" value="1" onClick={this.handleClick} /></td>
                        <td><input type="button" name="two" value="2" onClick={this.handleClick} /></td>
                        <td><input type="button" name="three" value="3" onClick={this.handleClick} /></td>
                        <td><input type="button" name="plus" value="+" onClick={this.handleClick} /></td>
                    </tr>
                    <tr>            
                        <td><input type="button" name="period" value="." onClick={this.handleClick} /></td>
                        <td><input type="button" name="zero" value="0" onClick={this.handleClick} /></td>
                        <td><input type="button" name="equal" value="=" onClick={this.handleClick} /></td>
                        <td><input type="button" name="multiply" value="*" onClick={this.handleClick} /></td>
                    </tr>
                </tbody>
            </table>
            <style dangerouslySetInnerHTML={{__html:`
                /*calculator styling*/
                input[type=button]{
                  width: 100%;
                  border-radius: 50%;
                  background: white;
                  border-color: red;
                  border-width: 1px;
                  box-shadow: inset red -2px -2px;
                  padding: 5px;
                }
                input[type=button]:hover{
                  background: whitesmoke;
                  box-shadow: inset red -1px -1px;
                }
                input[type=button]:active{
                  background: blue;
                  color: white;
                }
                input[type=button]:focus{
                  border-color: blue;
                  outline: none;
                  box-shadow: inset blue -2px -2px;
                }
                input[type=text]{
                  border-radius: 5px;
                  border: none;
                  box-shadow: inset blue 2px 2px;
                  text-align: right;
                }
                input[type=text] input[type=button]{
                  font-size: 12pt;
                  font-family: 'Roboto', sans-serif;
                }
                table{
                  background: linear-gradient(red, white, blue);
                  border-radius: 10px;
                  border: solid;
                  border-color: blue;
                  border-width: 1px;
                }
            `}} />
        </form>
        );
    }
}

export default Calculator;