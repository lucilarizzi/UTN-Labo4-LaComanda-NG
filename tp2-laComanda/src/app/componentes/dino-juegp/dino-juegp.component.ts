import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { MiservicioPrincipalService } from 'src/app/servicios/miservicio-principal.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dino-juegp',
  templateUrl: './dino-juegp.component.html',
  styleUrls: ['./dino-juegp.component.scss']
})
export class DinoJuegpComponent implements OnInit {
  @Output() editarB: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('recaptcha', { static: false }) recaptchaElement: ElementRef;

  email: string = "popo@popo.com";
  pass: string = "123456";
  pass2: string;
  ver: boolean;
  nombre: string;
  file;

  crearNuevo: boolean;
  cabsha;

  //////////////
  public imagesUrl;


  constructor(
    public servicio: MiservicioPrincipalService, private router: Router) {
    this.cabsha = false;
  }



  ngOnInit() {
    localStorage.setItem("email", "nn");
    localStorage.setItem("perfil", "nn");
    this.ver = true;
    this.crearNuevo = false;
    this.servicio.spinnerOn();
    setTimeout(() => this.servicio.spinnerOff(), 1500);
    this.imagesUrl = [
      "../assets/mesa4.jpg",
      "../assets/mesa5.jpg",
      "../assets/mesa6.jpg",
      "../assets/mesa7.jpg",
      "../assets/mesa1.jpg",
      "../assets/mesa2.jpg", 
      "../assets/mesa3.jpg",]

  }


  detectFiles(event) {
    this.file = event.target.files[0];
    console.info(this.file);
    console.info(event.target.files[0]);
    console.info(event.target);
  }



  crearValidar() {
    if (this.cabsha) {
      if (this.pass == this.pass2 && this.pass != "") {

        this.servicio.autenticar().altaUsuario(this.email, this.pass, this.file)
          .then(() => {
            this.servicio.toasterVerde("usuario creado con exito", "Exito!", 2500);
            localStorage.setItem("email", this.email);
            this.crearNuevo = false;
          }).catch(e => {
            console.info(e);
            this.servicio.toasterError("Error de la base de datos al autenticar " + e, "ERROR", 3000);
          });
      }
      else {
        this.servicio.toasterAzul("toaster que no son claves iguales", "error", 3000);
        this.pass = "123456";
        this.pass2 = "123456";

        //toaster que no son claves iguales
      }

    } else {
      this.servicio.toasterError("falta cabsha", "error", 2000);

    }
  }


  volver() {
    this.ver = true;
    this.crearNuevo = false;
  }


  crear() {
    this.crearNuevo = true;
  }



  async entrar() {
    console.log('entra');
    this.servicio.spinnerOn();
    await this.servicio.autenticar().logInNoGooogle(this.email, this.pass)
      .catch(e => {
        console.info(e);
        this.servicio.toasterWarning("Error de la base de datos al autenticar", e, 2000);

      });;
  }

  ingresar() {
    this.servicio.autenticar().usuarioAnonimo(this.email).then(() => this.router.navigateByUrl("/perfil"));
  }


  entrarConGooGle() {
    this.servicio.autenticar().googleSignin()
      .then(() => this.router.navigateByUrl("/perfil"));;

  }
  entrarConGithub() {
    this.servicio.autenticar().githubSignin()
      .then(() => this.router.navigateByUrl("/perfil"));;

  }




  ayuda() {
    this.email = "momo@momo.com";
    this.pass = "123456";
  }


  usuario(opcion) {

    switch (opcion) {
      case 1:
        this.email = "popo@popo.com";
        this.pass = "123456";
        break;
      case 2:
        this.email = "lucila@gmail.com";
        this.pass = "123456";
        break;
      case 3:
        this.email = "octavio@mail.com";
        this.pass = "123456";
        break;
      case 4:
        this.email = "popo@popo.com.po";
        this.pass = "123456";
        break;
      case 5:
        this.email = "popo@popo.com.nn";
        this.pass = "123456";
        break;
      case 6:
        this.email = "popo@popo.com.ll";
        this.pass = "123456";
        break;
      case 7:
        this.email = "popo@popo.com.ar";
        this.pass = "123456";
        break;
      case 8:
        this.email = "2luloop@gmail.com";
        this.pass = "123456";
        break;
      case 9:
        this.email = "lucilarizzi@gmail.com";
        this.pass = "123456";
        break;
      case 10:
        this.email = "lucilarizzi@gmail.com.ar";
        this.pass = "123456";
        break;

    }

    setTimeout(() => this.entrar(), 500);


  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if (captchaResponse != null && captchaResponse != undefined) {
      alert("buenichimo");
      this.cabsha = true;
    }
  }



}
