import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousForm } from './rendez-vous-form';

describe('RendezVousForm', () => {
  let component: RendezVousForm;
  let fixture: ComponentFixture<RendezVousForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendezVousForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendezVousForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
