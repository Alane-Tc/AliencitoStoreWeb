import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ViewChild('año', { static: false }) año!: ElementRef;
  fechaActual: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    console.log('añoActual', this.fechaActual);
    this.año.nativeElement.innerHTML = this.fechaActual;
  }
}
