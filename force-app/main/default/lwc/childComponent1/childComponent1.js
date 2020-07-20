import { LightningElement } from 'lwc';

export default class ChildComponent1 extends LightningElement {

    childMethod(event){
        const name = event.target.value;
        const selectedEvent = new CustomEvent('myevent', {detail:name});
        this.dispatchEvent(selectedEvent);
    }
}