import { Component } from "@angular/core";

@Component({
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})

export class ContactComponent {
    constructor() { }
    log(x: any) {
        console.log(x)
    }
}