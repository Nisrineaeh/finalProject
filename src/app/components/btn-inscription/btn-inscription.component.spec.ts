import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnInscriptionComponent } from './btn-inscription.component';

describe('BtnInscriptionComponent', () => {
  let component: BtnInscriptionComponent;
  let fixture: ComponentFixture<BtnInscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnInscriptionComponent]
    });
    fixture = TestBed.createComponent(BtnInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
