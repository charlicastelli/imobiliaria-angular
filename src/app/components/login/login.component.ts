import { UserModel } from './../../shared/model/user-model';
import { Router } from '@angular/router';
import { AuthenticationService } from './../service/authentication/authentication.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;
  formData!: UserModel;
  hide: boolean = true;
  username: string = '';
  password: string = '';
  user : UserModel = new UserModel();

  loading = false;
  submitted = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    if (this.authenticationService.currentUserValue) {
      console.log('Você continua logado HOME');
      //this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(this.formData ? this.formData.username : '', 
      [Validators.required, Validators.minLength(3)]),
      password: new FormControl(this.formData ? this.formData.password : '',
      [Validators.required]),
    });
  }

  onSubmit() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.submitted = true;
    if (this.form.invalid) {
      console.log('Formulário invalido!!!')
      // return;
    }
    this.loading = true;

    this.authenticationService
      .login(this.form.value)
      .then((data: any) => {
        //this.router.navigate(['/home']);
        console.log('Bem vindo, login sucesso')
      })
      .finally(() => {
        this.loading = false;
        this.submitted = false;
      });
  }


  //MENSAGENS ERRO CAMPOS DE TEXTO
  getErrorMessageUserName() {
    if ( this.form.controls['username'].hasError('required')) {
      return 'Usuário Obrigatório';
    }

    return this.form.controls['username'].invalid || this.form.controls['username'].hasError('required') ? 'Usuário Inválido' : '';
  }

  getErrorMessagePassword() {
    return this.form.controls['password'].invalid || this.form.controls['password'].hasError('required') ? 'Campo Obrigatório' : '';
  }
}
