import { Component } from "@angular/core";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { EmailValidator, EqualPasswordsValidator } from "../../validators";
import { registerConfig } from "../../configs/auth";

@Component({
  selector: "register",
  templateUrl: "./register.html",
  styleUrls: ["./register.scss"]
})
export class Register {
  private register: Object = registerConfig;
  public form: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;

  public submitted: boolean = false;
  
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      email: [
        "",
        Validators.compose([Validators.required, EmailValidator.validate])
      ],
      passwords: fb.group(
        {
          password: [
            "",
            Validators.compose([Validators.required, Validators.minLength(4)])
          ],
          repeatPassword: [
            "",
            Validators.compose([Validators.required, Validators.minLength(4)])
          ]
        },
        {
          validator: EqualPasswordsValidator.validate(
            "password",
            "repeatPassword"
          )
        }
      )
    });

    this.name = this.form.controls["name"];
    this.email = this.form.controls["email"];
    this.passwords = <FormGroup>this.form.controls["passwords"];
    this.password = this.passwords.controls["password"];
    this.repeatPassword = this.passwords.controls["repeatPassword"];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
}