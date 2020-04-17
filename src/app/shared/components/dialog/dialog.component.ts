import {Component, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form: FormGroup;

  constructor
  (
    public dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      sender: new FormControl(null,[Validators.required, Validators.minLength(2)]),
      senderEmail: new FormControl(null,[Validators.required, Validators.email]),
      senderMessage: new FormControl(null,[Validators.required])
    });
  }

  handleClose() {
    this.dialogRef.close();
  }

  submit() {
    if (this.form.invalid){
      return null;
    }
    let body = this.form.value;
    let headers = new HttpHeaders().set('SendEmail', 'true');
    this.http.post('/api/email/send',body, {headers}).subscribe(resp => {
      if (resp.hasOwnProperty('accepted')){
        if (resp['accepted'].length > 0){
          console.log('Succes');
        }
      } else {
        console.log('Error');
      }
    }, error => {
      console.log(error);
    });
  }
}
