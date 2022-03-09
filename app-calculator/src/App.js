import react, {Component} from "react"
import './App.css'



class app extends Component {
  state = {
    number: 0,
    oldNumber: 0,
    operator: "",
    result: 0
  }

  setInputNumber = (e) => {

    const inputNumber = e.target.value;
    const number = this.state.number
    const result = this.state.result
    console.log(inputNumber)  

    this.setState({
      number: number + inputNumber,
    });
          
    if(result === 0) {
      this.setState({
        result: inputNumber
      });  
    } else {
      this.setState({
        result: result + inputNumber
      });
    }

    }

    setInputOperator = (e) => {
      const {OldNumber, result} = this.state;
      const inputOperator = e.target.value;
      console.log(inputOperator)
  
      if(result !== 0){
        this.setState({
          operator: inputOperator,
          oldNumber: this.state.number,
          number: 0,
          result: this.state.result + inputOperator
    
        })
      }
      
    }
    
    getResultCalculate = () => {
      const {operator, oldNumber, number } = this.state;
  
      const oldNumberFloat = parseFloat(oldNumber);
      const numberFloat = parseFloat(number);
  
      switch(operator) {
        case("+"):
          return oldNumberFloat + numberFloat;
        case("-"):
          return oldNumberFloat - numberFloat;
        case("*"):
          return oldNumberFloat * numberFloat;
        case("/"):
          return oldNumberFloat / numberFloat; 
        default:
          return this.state.result;
      };

      
  

     

    
      
    }

    calculate = () => {
          const result = this.state
          const response = this.getResultCalculate();
          console.log({result})
          console.log({response})

          if(this.state.operator === "+"){
            return this.setState({
              result: response,
              number: response,
              oldNumber: 0
            })
          }else if(this.state.operator === "-"){
            return this.setState({
              result: response,
              number: response,
              oldNumber: 0
            })
          }else if(this.state.operator === "*"){
            return this.setState({
              result: response,
              number: response,
              oldNumber: 1
            })
          }else if(this.state.operator === "/"){
            return this.setState({
              result: response,
              number: response,
              
            })}
          // return this.setState({
          //   result: response,
          //   number: response,
            
 
          // })
          
    }
      
    setInputClear = () => {

      this.setState({
        result: 0,
        oldNumber: 0,
        operator: "",
        number: 0
      })
    }
   
  

  render(){
    return(
      <div className="container">
        
        <div className="content">
          <h1>{this.state.result}</h1>

          <div className="content-calc">
            <div>
              <button onClick={this.setInputNumber} value="7">7</button>
              <button onClick={this.setInputNumber} value="8">8</button>
              <button onClick={this.setInputNumber} value="9">9</button>
              <button  onClick={this.setInputOperator} value="+">+</button>
            </div>
            
            <div>
              <button onClick={this.setInputNumber} value="4">4</button>
              <button onClick={this.setInputNumber} value="5">5</button>
              <button onClick={this.setInputNumber} value="6">6</button>
              <button  onClick={this.setInputOperator} value="-">-</button>
              
              
            </div>
            <div>
              <button onClick={this.setInputNumber} value="1">1</button>
              <button onClick={this.setInputNumber} value="2">2</button>
              <button onClick={this.setInputNumber} value="3">3</button>
              <button  onClick={this.setInputOperator} value="*">x</button>
            </div>
            <div>
              <button onClick={this.setInputClear}>C</button>            
              <button onClick={this.setInputNumber} value="0">0</button>
              <button onClick={this.calculate}>=</button>
              <button onClick={this.setInputOperator} value="/">/</button>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default app
