import { Component,OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from'@angular/forms';
import{AuthService}from'../auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(public _AuthService:AuthService){

  }
  
  
  registerForm:FormGroup=new FormGroup({
    'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
    'age':new FormControl(null,[Validators.required,Validators.min(16),Validators.max(65)]),
    'email':new FormControl(null, [Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),

  })
  
  ngOnInit(): void { 
  }
  getFormData(formData:any){
    if(formData.valid==true){
     this._AuthService.signUp(formData.value).subscribe(data=>{
      
     })
    }  
    

  }
}
