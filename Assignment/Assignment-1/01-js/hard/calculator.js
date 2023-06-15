class Calculator {
    constructor(result){
        this.result = 0;
    }
    add(nums){
        this.result = this.result + Number(nums);
    }
    subtract(nums){
        this.result = this.result - Number(nums);
    }
    multiply(nums){
        this.result = this.result * Number(nums);
    }
    divide(nums){
        if (nums === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result = (this.result / Number(nums)).toFixed(5);
    }
    clear(){
        this.result = 0; 
    }
    getResult(){
        return Number(this.result);
    }
    calculate(expression) {
        const sanitizedExpression = expression.replace(/\s+/g, '');

        const invalidCharRegex = /[^0-9+\-*/().]/;
        if (invalidCharRegex.test(sanitizedExpression)) {
          throw new Error("Invalid expression: contains invalid characters");
        }
    
        if (sanitizedExpression.includes('/0')) {
          throw new Error("Invalid expression: division by zero");
        }
    
        try {
          this.result = eval(sanitizedExpression);
        } catch (error) {
          throw new Error("Invalid expression");
        }
      }
}

module.exports = Calculator;