import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  msg: string = '';
  constructor(private _snackBar: MatSnackBar) {}

  onContactSubmit() {
    console.log(`${this.name}-${this.email}-${this.msg}`);
    this._snackBar.open('Thank you for your feedback.', 'OK', {
      duration: 2000,
    });
  }
}
