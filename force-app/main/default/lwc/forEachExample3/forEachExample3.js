import { LightningElement,wire } from 'lwc';
import getRelatedContacts from '@salesforce/apex/FetchAccountRecords.getRelatedContacts';
import getAccounts from '@salesforce/apex/FetchAccountRecords.getAccounts';

export default class ForEachExample3 extends LightningElement {

    @wire(getAccounts) accounts;
    @wire(getRelatedContacts) relatedContacts;
}