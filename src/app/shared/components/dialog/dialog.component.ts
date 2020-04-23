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
  showSpinner = false;

  constructor
  (
    public dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      sender: new FormControl(null,[Validators.required, Validators.minLength(2)]),
      senderEmail: new FormControl(null,[Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      senderMessage: new FormControl(null,[Validators.required])
    });
  }

  handleClose() {
    this.dialogRef.close(null);
  }

  submit() {
    if (this.form.invalid){
      return null;
    }
    this.showSpinner = true;
    let body = JSON.stringify(this.form.value);
    let headers = new HttpHeaders().set('SendEmail', 'true').set('Content-Type','application/json; charset=utf-8');
    this.http.post('/api/email/send',body, {headers}).subscribe(resp => {
      if (resp.hasOwnProperty('accepted')){
        if (resp['accepted'].length > 0){
          this.dialogRef.close('success');
        }
      } else {
        this.dialogRef.close('error');
      }
    }, error => {
        this.dialogRef.close('error');
    }, () => this.showSpinner = false);
  }
}
