import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherantListComponent } from './adherant-list.component';

describe('AdherantListComponent', () => {
  let component: AdherantListComponent;
  let fixture: ComponentFixture<AdherantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdherantListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdherantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
