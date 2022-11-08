import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplatoonDetailsComponent } from './splatoon-details.component';

describe('SplatoonDetailsComponent', () => {
  let component: SplatoonDetailsComponent;
  let fixture: ComponentFixture<SplatoonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplatoonDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplatoonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
