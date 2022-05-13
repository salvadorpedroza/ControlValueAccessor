import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForms';

  inputsConfig: {name: string; config:any}[];
  contactForm: FormGroup;
  errors: any = {
    fullName:'field is required',
    emailAddress:'field is required',
    phoneNumber:'field is required',
    description:'field is required'
  };

  constructor(private fb:FormBuilder) {

    this.inputsConfig = [
      {
        name: 'fullName',
        config:{
          label: 'full Name'
        }
      },
      {
        name: 'emailAddress',
        config:{
          label: 'email Address'
        }
      },
      {
        name: 'phoneNumber',
        config:{
          label: 'phone Number'
        }
      },
      {
        name: 'description',
        config:{
          label: 'description'
        }
      }
    ]
  }

  ngOnInit(): void {

    /* this.contactForm = new FormGroup({
      fullName: new FormControl('',Validators.required),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    }); */



    this.contactForm = this.fb.group ({
      fullName: [null, Validators.required],
      emailAddress: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      description: [null, Validators.required]
    });

    this.contactForm.valueChanges.subscribe(state =>{
      for(let [key, value] of Object.entries(this.contactForm.controls)){
        if(value.errors != null){
          let message;
          if(value.errors.required) message = 'field is required'
          if(value.errors.email) message = 'enter valid email'
          this.errors[key] = message;
        }else{
          delete this.errors[key];
        }
      }
    })
  }


  get emailAddress (){
    let email = this.contactForm.get('emailAddress');
    return email;
  }

}
