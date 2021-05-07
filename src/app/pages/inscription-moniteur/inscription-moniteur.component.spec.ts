import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionMoniteurComponent } from './inscription-moniteur.component';

describe('InscriptionMoniteurComponent', () => {
  let component: InscriptionMoniteurComponent;
  let fixture: ComponentFixture<InscriptionMoniteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionMoniteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionMoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
