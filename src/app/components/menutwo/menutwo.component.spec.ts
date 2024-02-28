import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutwoComponent } from './menutwo.component';

describe('MenutwoComponent', () => {
  let component: MenutwoComponent;
  let fixture: ComponentFixture<MenutwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenutwoComponent]
    });
    fixture = TestBed.createComponent(MenutwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
