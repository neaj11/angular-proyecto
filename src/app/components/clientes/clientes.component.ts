import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements AfterViewInit {
  @ViewChild('myCarousel') myCarousel!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    jQuery(this.myCarousel.nativeElement).myCarousel();
  }
  // ...
}