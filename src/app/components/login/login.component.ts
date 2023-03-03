import { UserModel } from './../../shared/model/user-model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../service/authentication/authentication.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

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
  user: UserModel = new UserModel();

  loading = false;
  submitted = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    //Se estiver logado ao tentar acessar '/login' vai redirecionar para 'home'
    if (this.authenticationService) {
      this.router.navigate(['home'], { relativeTo: this.route });
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(this.formData ? this.formData.username : '', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl(this.formData ? this.formData.password : '', [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    //const currentUrl = window.location.href; //retorna todo caminho
    const currentUrl = this.location.getState();
    console.log(currentUrl);

    this.user.username = this.username;
    this.user.password = this.password;
    this.submitted = true;
    if (this.form.invalid) {
      console.log('Formulário invalido!!!');
      // return;
    }
    this.loading = true;

    this.authenticationService
      .login(this.form.value)
      .then((data: any) => {
        this.router.navigate(['home'], { relativeTo: this.route });
      })
      .finally(() => {
        this.loading = false;
        this.submitted = false;
      });
  }

  // teste() {
  //   if (this.authenticationService.currentUserValue) {
  //     console.log('Você continua logado HOME');
  //     this.router.navigate(['home'], {relativeTo: this.route});
  //   }
  // }

  //MENSAGENS ERRO CAMPOS DE TEXTO
  getErrorMessageUserName() {
    if (this.form.controls['username'].hasError('required')) {
      return 'Usuário Obrigatório';
    }

    return this.form.controls['username'].invalid ||
      this.form.controls['username'].hasError('required')
      ? 'Usuário Inválido'
      : '';
  }

  getErrorMessagePassword() {
    return this.form.controls['password'].invalid ||
      this.form.controls['password'].hasError('required')
      ? 'Campo Obrigatório'
      : '';
  }
}
