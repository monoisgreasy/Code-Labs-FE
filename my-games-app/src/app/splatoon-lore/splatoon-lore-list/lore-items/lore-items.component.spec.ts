import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoreItemsComponent } from './lore-items.component';

describe('LoreItemsComponent', () => {
  let component: LoreItemsComponent;
  let fixture: ComponentFixture<LoreItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoreItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoreItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
