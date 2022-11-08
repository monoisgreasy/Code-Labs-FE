import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplatoonLoreListComponent } from './splatoon-lore-list.component';

describe('SplatoonLoreListComponent', () => {
  let component: SplatoonLoreListComponent;
  let fixture: ComponentFixture<SplatoonLoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplatoonLoreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplatoonLoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
