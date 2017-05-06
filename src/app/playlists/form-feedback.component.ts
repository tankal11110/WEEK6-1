import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-feedback',
  template: `
  <div class="form-group has-error" >
    <div class="form-control-feedback" style="width:100%; position:relative;" *ngIf="error.errors?.required">To pole jest wymagane</div>
    <div class="form-control-feedback" style="width:100%; position:relative;" *ngIf="error.errors?.minlength">W tym polu zamało znaków</div>
    <div class="form-control-feedback" style="width:100%; position:relative;" *ngIf="error.errors?.maxlength">W tym polu zadużo znaków</div>
  </div>
  `,
  styles: []
})
export class FormFeedbackComponent implements OnInit {

 @Input()
 error;

  constructor() { 
  
  }


  ngOnInit() {
  }

}
