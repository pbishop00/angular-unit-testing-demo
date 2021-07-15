import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolHeaderComponent } from './tool-header.component';

//Test suite - 
describe('ToolHeaderComponent', () => {
  let component: ToolHeaderComponent;
  let fixture: ComponentFixture<ToolHeaderComponent>;
  const headerText = "The Tool";
  const defaultHeaderText = "Placeholder";

  //Setup function
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolHeaderComponent ]
    })
    .compileComponents();
  });

  //each test runs independent of other test and cannot depend on result
  beforeEach(() => {
    fixture = TestBed.createComponent(ToolHeaderComponent);
    component = fixture.componentInstance;
    component.headerText = headerText;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('default header text content populates the h1', () => {
    fixture.detectChanges();
    const headerElement = fixture.nativeElement as HTMLHeadingElement;
    expect(headerElement.textContent).toEqual(headerText);
  });

  it('header text content populates the h1', () => {
    component.headerText = headerText;
    fixture.detectChanges();
    const headerElement = fixture.nativeElement as HTMLHeadingElement;
    expect(headerElement.textContent).toEqual(headerText);
  });

  it('header text populates the h1 element', () => {
    component.headerText = headerText;
    fixture.detectChanges();
    const h1Element = fixture.nativeElement.querySelector("h1") as HTMLHeadingElement;
    expect(h1Element.textContent).toEqual(headerText);

    //returns array of elements
    const h1Elements = fixture.nativeElement.querySelectorAll("h1") as HTMLHeadingElement[];
    expect(h1Elements.length).toEqual(1);
    
  });
});
