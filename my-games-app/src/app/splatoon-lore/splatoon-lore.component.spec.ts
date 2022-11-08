import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplatoonLoreComponent } from './splatoon-lore.component';

describe('SplatoonLoreComponent', () => {
  let component: SplatoonLoreComponent;
  let fixture: ComponentFixture<SplatoonLoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplatoonLoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplatoonLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
