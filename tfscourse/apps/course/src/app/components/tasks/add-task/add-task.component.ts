import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../../shared/interfaces/Task';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'tfscourse-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit, OnDestroy {
  private subject = new Subject();

  @Output()
  add = new EventEmitter<Task>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.form.valueChanges
      .pipe(takeUntil(this.subject))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subject.next();
  }

  initForm() {
    this.form = this.fb.group({
      title: [''],
    });
  }

  onClick() {
    this.add.emit(this.form.value);
    this.form.reset();
  }

}
