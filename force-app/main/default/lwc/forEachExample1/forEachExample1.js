import { LightningElement } from 'lwc';

export default class ForEachExample1 extends LightningElement {
    fruitList =['Apple', 'Orange', 'Banana', 'Kiwi'];

    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
}