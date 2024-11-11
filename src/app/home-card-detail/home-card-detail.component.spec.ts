import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardDetailComponent } from './home-card-detail.component';

describe('HomeCardDetailComponent', () => {
  let component: HomeCardDetailComponent;
  let fixture: ComponentFixture<HomeCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCardDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
