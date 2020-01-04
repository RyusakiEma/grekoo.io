import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordadoComponent } from './bordado.component';

describe('BordadoComponent', () => {
  let component: BordadoComponent;
  let fixture: ComponentFixture<BordadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
