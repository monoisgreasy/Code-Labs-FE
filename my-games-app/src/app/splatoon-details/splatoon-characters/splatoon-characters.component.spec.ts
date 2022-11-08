import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplatoonCharactersComponent } from './splatoon-characters.component';

describe('SplatoonCharactersComponent', () => {
  let component: SplatoonCharactersComponent;
  let fixture: ComponentFixture<SplatoonCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplatoonCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplatoonCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
