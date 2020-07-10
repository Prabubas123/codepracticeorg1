import {LightningElement,wire} from 'lwc';
import getAccounts from '@salesforce/apex/FetchAccountRecords.getAccounts';

export default class ForEachExample2 extends LightningElement {

    @wire(getAccounts) accounts;
}