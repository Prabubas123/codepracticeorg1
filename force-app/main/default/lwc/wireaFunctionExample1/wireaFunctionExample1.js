import { LightningElement,wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/FetchAccountRecords.getAccounts'
export default class WireaFunctionExample1 extends LightningElement {
    @track accounts
    @wire(getAccounts) wiredAccount({error,data}) {
        if (data) {
            this.accounts = data;            
        } else if (error) {
            this.accounts = undefined;
        }
    }
}