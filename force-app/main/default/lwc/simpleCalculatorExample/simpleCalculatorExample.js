import { LightningElement } from 'lwc';

export default class SimpleCalculatorExample extends LightningElement {
    firstnumber = 0
    secondnumber = 0
    

    handleCalculation(event){
        if(event.target.name === 'fnumber'){
            this.firstnumber = event.target.value
        }

        if(event.target.name === 'snumber'){
            this.secondnumber = event.target.value
        }
        this.result = parseInt(this.firstnumber) + parseInt(this.secondnumber)
    }
    

    
}