import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RxSelectComponent } from '@rxweb/angular/select';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('rxselect') rxSelect: RxSelectComponent;
  formGroup: FormGroup;

  countries: any[] = [
    {
      countryId: 0,
      countryName: 'New Zealand',
    },
    {
      countryId: 2,
      countryName: 'Italy',
    },
    {
      countryId: 3,
      countryName: 'France',
    },
    {
      countryId: 4,
      countryName: 'USA test',
    },
    {
      countryId: 5,
      countryName: 'Australia',
    },
  ];

  swapped: boolean = false;

  bindable: boolean = true;

  searchEventName = '';

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      eventText: ['ab'],
      countryId: [],
    });
  }
}
