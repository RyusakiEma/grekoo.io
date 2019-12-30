import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublimacionComponent } from './sublimacion.component';

describe('SublimacionComponent', () => {
  let component: SublimacionComponent;
  let fixture: ComponentFixture<SublimacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublimacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublimacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
