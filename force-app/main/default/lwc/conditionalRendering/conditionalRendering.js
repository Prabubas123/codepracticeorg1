import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    showMe = false;
    hideMe = false;

    clickMeToShow(event){
        //this.showMe =!this.showMe;
        this.showMe = true;
        this.hideMe = false;    
    }

    clickMeToHide(){
        this.hideMe = true;
        this.showMe = false;
    }
}