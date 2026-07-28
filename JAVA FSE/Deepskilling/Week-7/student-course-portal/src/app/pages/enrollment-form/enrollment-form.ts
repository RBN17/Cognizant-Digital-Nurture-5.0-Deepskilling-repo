import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = 'Odd';
  agreeToTerms = false;

  submitted = false;
  successMessage = '';

  constructor(private courseService: CourseService) {}

  onSubmit(form: NgForm) {

    if (form.valid && this.courseId !== null) {

      const newCourse = {
        name: this.studentName,
        code: 'COURSE' + this.courseId,
        credits: 3,
        gradeStatus: 'pending' as const
      };

      this.courseService.createCourse(newCourse).subscribe({
        next: (course) => {
          console.log('Course Created:', course);

          this.submitted = true;
          this.successMessage = 'Enrollment request submitted successfully!';

          form.resetForm({
            preferredSemester: 'Odd',
            agreeToTerms: false
          });
        },
        error: (err) => {
          console.error(err);
        }
      });

    }

  }

}