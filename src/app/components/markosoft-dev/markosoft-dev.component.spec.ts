import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkosoftDevComponent } from './markosoft-dev.component';

describe('MarkosoftDevComponent', () => {
  let component: MarkosoftDevComponent;
  let fixture: ComponentFixture<MarkosoftDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkosoftDevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkosoftDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
