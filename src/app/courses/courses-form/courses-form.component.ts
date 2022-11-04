import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {

  form:FormGroup;
  constructor(private formbuilder:FormBuilder) {
    this.form=this.formbuilder.group({
      name:[null],
      category:[null]
   });
  }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log('teste');
  }

  onCancel(){
    console.log('teste');
  }

}
