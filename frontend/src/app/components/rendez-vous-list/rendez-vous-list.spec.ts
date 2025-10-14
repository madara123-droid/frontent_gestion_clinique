import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousList } from './rendez-vous-list';

describe('RendezVousList', () => {
  let component: RendezVousList;
  let fixture: ComponentFixture<RendezVousList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendezVousList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendezVousList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
