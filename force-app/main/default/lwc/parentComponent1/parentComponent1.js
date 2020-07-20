import { LightningElement } from 'lwc';

export default class ParentComponent1 extends LightningElement {
    msg;
    parentHandler(event){
        this.msg = event.detail;
    }
}