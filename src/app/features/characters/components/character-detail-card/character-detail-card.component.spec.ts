import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailCardComponent } from './character-detail-card.component';

describe('CharacterDetailCardComponent', () => {
  let component: CharacterDetailCardComponent;
  let fixture: ComponentFixture<CharacterDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
