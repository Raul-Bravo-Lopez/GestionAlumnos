import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrenghtBarComponent } from './strenght-bar.component';

describe('StrenghtBarComponent', () => {
  let component: StrenghtBarComponent;
  let fixture: ComponentFixture<StrenghtBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrenghtBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrenghtBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
