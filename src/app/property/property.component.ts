import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {


  public formProperty! : FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

iniciarFormulario(){
  this.formProperty=this.formBuilder.group({
    texto :['',Validators.required],
    fecha:['',Validators.required],
    pesos:[,Validators.required],
    check:[false,Validators.required],
    numero:['',[Validators.required,Validators.minLength(8),Validators.maxLength(11),Validators.pattern(/^[0-9]\d{6,10}$/)]],
  })
}
  
  sendProperty(): any {
    console.log(this.formProperty.value);
  }
}
