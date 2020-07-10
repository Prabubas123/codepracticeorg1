import { LightningElement } from 'lwc';

export default class ButtonHideAndShow extends LightningElement {

    booleanBtn = false
   
   
    handleSave(event){
        this.booleanBtn =true
        
    }

    handleCancel(event){
        this.booleanBtn = false
        
    }
}