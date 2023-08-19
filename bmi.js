import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./assignment1.css";

class Bmi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: 100,
      ft: 0,
      inch: 0,
      result: 0,
    };
  }
 
  calculate(){
    if(this.state.weight && this.state.ft && this.state.inch){
        let totalinch= 12;
        var height= Number(this.state.ft);
        height *= totalinch;
        height += Number(this.state.inch);

        let weight = this.state.weight;

        var bmi = (weight / (height * height)) * 703;
          bmi = bmi.toFixed(2);


          return bmi;
        }
   

          
    }

  
  
  render() {
    return (
      <div className="main">
        <h1>BMI</h1>
        <div className="headings">Units:</div>
        <select className="style">
          <option>US customary</option>
        </select>
        <br />
        <br />
        <div className="headings"> Weight:</div>
        <div className="style">
          
          {this.state.weight} <span>Lbs</span>
          <button
            className="btn"
           
            onClick={() => {
              this.setState({ weight: this.state.weight - 1 });
              this.setState({
                result:this.calculate()
              })
            }}
          >
            <FontAwesomeIcon icon={faSquareMinus} />
          </button>
          <button
            className="btn"
            
            onClick={() => {
              this.setState({ weight: this.state.weight + 1 });
              this.setState({
                result:this.calculate()
              })
            }}
          >
            <FontAwesomeIcon icon={faSquarePlus} />
          </button>
        </div>
        <br />
        <br />
        <div className="headings">Height:</div>
        <div className="style">
          
          {this.state.ft} <span>Ft</span>
          <button
            className="btn"
           
            onClick={() => {
              this.setState({ ft: this.state.ft - 1 });
              this.setState({
                result:this.calculate()
              })
            }}
          >
            <FontAwesomeIcon icon={faSquareMinus} />
          </button>
          <button
            className="btn"
            
            onClick={() => {
              this.setState({ ft: this.state.ft + 1 });
              this.setState({
                result:this.calculate()
              })
            }}
          >
            <FontAwesomeIcon icon={faSquarePlus} />
          </button>
        </div>
        <br />
        <br />
        <div className="style">
         
          {this.state.inch} <span>Inch</span>
          <button
            className="btn"
           
            onClick={() => {
              this.setState({ inch: this.state.inch - 1 });
              this.setState({
                result:this.calculate()
              })
            }}
          >
            <FontAwesomeIcon icon={faSquareMinus} />
          </button>
          <button
            className="btn"
            
            onClick={() => {
              this.setState({ inch: this.state.inch + 1 });
              this.setState({
                result:this.calculate()
              })
            }}
          >
            <FontAwesomeIcon icon={faSquarePlus} />
          </button>
        </div>
        <br />
        <h1>Results</h1>
        {this.state.result>=18.5 ? (<div className="result">Bmi is: {this.state.result} </div>):(<div className="result1">Bmi is: {this.state.result} </div>)}
        <br />
        <button className="reset" value="reset">
          Reset
        </button>
      </div>
    );
  }

}
export default Bmi;
