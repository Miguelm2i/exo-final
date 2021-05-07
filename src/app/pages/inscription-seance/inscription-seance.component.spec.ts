import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionSeanceComponent } from './inscription-seance.component';

describe('InscriptionSeanceComponent', () => {
  let component: InscriptionSeanceComponent;
  let fixture: ComponentFixture<InscriptionSeanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionSeanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
