import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplatoonLoreDetailsComponent } from './splatoon-lore-details.component';

describe('SplatoonLoreDetailsComponent', () => {
  let component: SplatoonLoreDetailsComponent;
  let fixture: ComponentFixture<SplatoonLoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplatoonLoreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplatoonLoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
