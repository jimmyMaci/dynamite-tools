import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-dynamic-components',
  template: `
    <p>
      dynamic-components works!
    </p>
  `,
  styles: []
})
export class DynamicComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
