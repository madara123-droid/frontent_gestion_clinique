import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinList } from './medecin-list';

describe('MedecinList', () => {
  let component: MedecinList;
  let fixture: ComponentFixture<MedecinList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedecinList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedecinList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
