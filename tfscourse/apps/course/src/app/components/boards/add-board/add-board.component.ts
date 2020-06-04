import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Board } from '../../../shared/interfaces/Board';
import { Subject } from 'rxjs';

@Component({
  selector: 'tfscourse-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent implements OnInit, OnDestroy {
  @Output()
  add = new EventEmitter<Board>();

  form: FormGroup;

  private subject = new Subject();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initBoardForm();
  }

  ngOnDestroy(): void {
    this.subject.next();
  }

  initBoardForm() {
    this.form = this.fb.group({
      title: [''],
    })
  }

  onClick() {
    this.add.emit(this.form.value);
    this.form.reset();
  }
}
