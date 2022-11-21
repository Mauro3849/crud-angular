import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {

  form=this.formbuilder.group({
    name:[''],
    category:['']
 });
  constructor(private formbuilder:NonNullableFormBuilder,
    private service:CoursesService,
    private snackBar:MatSnackBar,
    private location:Location) {
    this.form
  }
  ngOnInit(): void {
  }

  onSubmit(){
     this.service.save(this.form.value)
      .subscribe(result=>this.onSuccess(),error=>this.onError());//necessaria usar o subscribe para chamar
  }

  onCancel(){
    this.location.back();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar curso!','',{duration:5000});
  }

  private onSuccess(){
    this.snackBar.open('Curso salvo com sucesso!','',{duration:5000});
    this.onCancel();
  }

}
