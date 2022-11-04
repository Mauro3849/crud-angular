import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import{catchError, Observable, of} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable <Course[]>;
  displayedColumns=['name','category','actions'];

  constructor(private coursesService:CoursesService,
              private dialog:MatDialog,
              private router: Router,
              private route :ActivatedRoute
              ) {

    this.courses$=this.coursesService.list()
    .pipe(catchError(error=>{
      this.onError('Erro ao carregar cursos');
      return of([])}))

  }

  ngOnInit(): void {

  }
  onAdd(){

    this.router.navigate(['new'],{relativeTo:this.route});
  }

  onError(errorMsg:string){
    this.dialog.open(ErrorDialogComponent, {

      data: errorMsg
    });
  }

}
