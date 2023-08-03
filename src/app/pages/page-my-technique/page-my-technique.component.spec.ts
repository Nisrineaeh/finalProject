import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyTechniqueComponent } from './page-my-technique.component';

describe('PageMyTechniqueComponent', () => {
  let component: PageMyTechniqueComponent;
  let fixture: ComponentFixture<PageMyTechniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMyTechniqueComponent]
    });
    fixture = TestBed.createComponent(PageMyTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
