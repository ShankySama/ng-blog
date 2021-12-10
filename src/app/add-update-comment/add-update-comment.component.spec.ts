import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateCommentComponent } from './add-update-comment.component';

describe('AddUpdateCommentComponent', () => {
  let component: AddUpdateCommentComponent;
  let fixture: ComponentFixture<AddUpdateCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
