import { async, TestBed } from '@angular/core/testing';
import { UiInterfacesModule } from './ui-interfaces.module';

describe('UiInterfacesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiInterfacesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiInterfacesModule).toBeDefined();
  });
});
