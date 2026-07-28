import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  noCourseCode(control: AbstractControl): ValidationErrors | null {

    const value = control.value;

    if (value && value.toString().startsWith('XX')) {
      return { noCourseCode: true };
    }

    return null;
  }

  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {

    return new Promise(resolve => {

      setTimeout(() => {

        if (control.value && control.value.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }

      }, 800);

    });

  }

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: ['', [Validators.required, Validators.minLength(3)]],

      studentEmail: this.fb.control(
        '',
        [Validators.required, Validators.email],
        [this.simulateEmailCheck.bind(this)]
      ),

      courseId: [null, [Validators.required, this.noCourseCode]],

      preferredSemester: ['Odd', Validators.required],

      agreeToTerms: [false, Validators.requiredTrue],

      additionalCourses: this.fb.array([])

    });

  }

  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(
      new FormControl('', Validators.required)
    );
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // enrollForm.value excludes disabled controls.
  // enrollForm.getRawValue() includes all controls, even if they are disabled.

  onSubmit(): void {

    console.log('Form Value:', this.enrollForm.value);

    console.log('Raw Value:', this.enrollForm.getRawValue());

    if (this.enrollForm.valid) {
      this.submitted = true;
    }
  }

}