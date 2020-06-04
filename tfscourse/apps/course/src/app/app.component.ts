import { Component, OnInit } from '@angular/core';
import { ApiErrorsService } from './shared/services/apiErrors.service';
import { NavigationService } from './shared/services/navigation.service';

@Component({
  selector: 'tfscourse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private apiErrorsService: ApiErrorsService,
    private navigationService: NavigationService,
  ) {}

  ngOnInit(): void {
    this.apiErrorsService.errors$.subscribe(code => {
      this.navigationService.toLogin();
    });
  }
}
