import { ControlValueAccessor } from '@angular/forms';

export class NgModelBase implements ControlValueAccessor {
    private innerValue: any = '';

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: Function;
    private onChangeCallback: Function;

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }


    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    onChange(){
        this.onChangeCallback(this.value);
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}