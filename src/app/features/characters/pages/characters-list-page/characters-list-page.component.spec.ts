import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListPageComponent } from './characters-list-page.component';

describe('CharactersListPageComponent', () => {
  let component: CharactersListPageComponent;
  let fixture: ComponentFixture<CharactersListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
