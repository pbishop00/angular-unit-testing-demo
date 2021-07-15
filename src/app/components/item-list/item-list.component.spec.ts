import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  const itemList = ["item 1", "item 2", "item 3", "item 4"];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('item list should contain 4 elements', () => {
    component.itemList = itemList;
    fixture.detectChanges();
    const ulElements = fixture.nativeElement.querySelectorAll("li") as HTMLLIElement[];
    expect(ulElements.length).toEqual(itemList.length);
  });


  it('item list should contain 4 elements', () => {
    component.itemList = itemList;
    fixture.detectChanges();
    const ulElements = fixture.nativeElement.querySelectorAll("li") as HTMLLIElement[];
    ulElements.forEach((item, i) => {
      expect(item.textContent).toEqual(itemList[i]);
    });
  });



});
