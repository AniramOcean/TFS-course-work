import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskList } from '@tfscourse/api-interfaces';

@Component({
  selector: 'tfscourse-add-task-list',
  templateUrl: './add-task-list.component.html',
  styleUrls: ['./add-task-list.component.scss']
})
export class AddTaskListComponent implements OnInit {
  @Output()
  add = new EventEmitter<TaskList>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initListForm();
  }

  initListForm() {
    this.form = this.fb.group({
      title: [''],
      date: ['']
    });
  }

  onClick() {
    this.add.emit(this.form.value);
    this.form.reset();
  }
}
