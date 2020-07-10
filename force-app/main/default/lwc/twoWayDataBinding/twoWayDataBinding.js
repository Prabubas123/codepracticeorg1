import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    firstname = '';
    lastname = '';

    getNameHandler(event){
       this[event.target.name] = event.target.value;
       
       /*   const field = event.target.name;
        if (field === 'firstname') {
            this.firstname = event.target.value;
        }else if(field === 'lastname'){
            this.lastname = event.target.value;
        }*/
    }
}