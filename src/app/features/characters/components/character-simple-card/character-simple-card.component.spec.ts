import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSimpleCardComponent } from './character-simple-card.component';

describe('CharacterSimpleCardComponent', () => {
  let component: CharacterSimpleCardComponent;
  let fixture: ComponentFixture<CharacterSimpleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSimpleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSimpleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
