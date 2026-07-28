import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, retry, catchError, switchMap } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/courses';

  // Local data for EnrollmentService
  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 3,
      name: 'React',
      code: 'REA401',
      credits: 2,
      gradeStatus: 'passed'
    },
    {
      id: 4,
      name: 'Database',
      code: 'DB501',
      credits: 3,
      gradeStatus: 'pending'
    },
    {
      id: 5,
      name: 'Spring Boot',
      code: 'SPR601',
      credits: 4,
      gradeStatus: 'failed'
    }
  ];

  constructor(private http: HttpClient) {}

  // HTTP Methods
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
  
      retry(2),
  
      map(courses =>
        courses.filter(course => course.credits > 0)
      ),
  
      tap(courses => console.log('Courses loaded:', courses.length)),
  
      catchError(err => {
        console.error(err);
  
        return throwError(() =>
          new Error('Failed to load courses. Please try again.')
        );
      })
  
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      switchMap(courses => {
        const course = courses.find(c => c.id === id);
  
        if (!course) {
          return throwError(() => new Error('Course not found'));
        }
  
        return new Observable<Course>(observer => {
          observer.next(course);
          observer.complete();
        });
      })
    );
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Local method used by EnrollmentService
  getCourseByIdLocal(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }
}