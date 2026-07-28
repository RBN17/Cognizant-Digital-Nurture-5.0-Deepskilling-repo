import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';

import { CourseCard } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';
import { EnrollmentService } from '../../services/enrollment';

import { Course } from '../../models/course.model';

import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard,
    HighlightDirective
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = false;
  courses$!: Observable<Course[]>;

  searchTerm = '';
  errorMessage = '';

  constructor(
    private store: Store,
    public enrollmentService: EnrollmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') || '';

    this.courses$ = this.store.select(selectAllCourses);

    this.store.dispatch(loadCourses());
  }

  updateSearch(): void {
    this.router.navigate(
      ['courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  viewCourse(course: Course): void {
    this.router.navigate(['courses', course.id]);
  }

  updateCourse(course: Course, event: Event): void {
    event.stopPropagation();
    alert('Update functionality will be connected through NgRx later.');
  }

  deleteCourse(course: Course, event: Event): void {
    event.stopPropagation();
    alert('Delete functionality will be connected through NgRx later.');
  }
}