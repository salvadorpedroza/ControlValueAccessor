import { Component, OnInit, Input, Output, EventEmitter, forwardRef  } from '@angular/core';
import { InputModel } from '../shared/input.model';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgModelBase } from '../shared/ng-model.base';

@Component({
  selector: 'input-line',
  templateUrl: './input-line.component.html',
  styleUrls: ['./input-line.component.css'],
  providers: [ 
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputLineComponent,
      multi: true
    }
  ]
})

export class InputLineComponent extends NgModelBase {
  @Input() config: InputModel;
}
