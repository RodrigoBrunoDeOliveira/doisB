import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-leed-panel',
  templateUrl: './leed-panel.component.html',
  styleUrls: ['./leed-panel.component.scss']
})
export class LeedPanelComponent implements OnInit {
  @Input() message: string;
  @Input() title: string;

  public form: FormGroup;
  private submittedForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, Validators.required],
      phone: [null, [Validators.required]]
    });
  }

  public invalidField(field: string): string {
    console.log('data', this.form);

    if(!this.form.get(field).valid && this.submittedForm) return 'invalid';
  }

  public onSubmit(): void {
    console.log('onSubmit', this.form);
    this.submittedForm = true;
  }

  private resetForm(): void {
    this.form.reset();
    this.submittedForm = false;
  }
}