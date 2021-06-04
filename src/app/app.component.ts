import { Component } from '@angular/core';


interface Location {
  value: string;
  viewValue: string;
}
interface Type {
  value: string;
  viewValue: string;
}
interface Range {
  value:string;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gemail';
  locations: Location[] = [
    {value: 'London-0', viewValue: 'London'},
    {value: 'Japanese-1', viewValue: 'Japanese'},
    {value: 'Americano-2', viewValue: 'Americano'}
  ];
  types: Type[] = [
    {value: 'small-0', viewValue: 'Small'},
    {value: 'medium-1', viewValue: 'Medium'},
    {value: 'large-2', viewValue: 'Large'}
  ];
  ranges: Range[] = [
    {value: '$5000-0', viewValue: '$5000'},
    {value: '$15000-1', viewValue: '$15000'},
    {value: '$25000-2', viewValue: '$25000'}
  ];
}
