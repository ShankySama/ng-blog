import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAddUpdateComponent } from './article-add-update.component';

describe('ArticleAddUpdateComponent', () => {
  let component: ArticleAddUpdateComponent;
  let fixture: ComponentFixture<ArticleAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleAddUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
