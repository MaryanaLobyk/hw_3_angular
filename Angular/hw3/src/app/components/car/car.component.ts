import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Car } from '../../modules/Car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: Car;

  constructor() { }

  ngOnInit(): void {

  }

}
