import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusquedasComponent } from './componentes/busquedas/busquedas.component';
import { AuthGuard } from './servicios/guard/auth.guard';
import { TodosComponent } from './componentes/todos/todos.component';
import { ListadoProductoComponent } from './componentes/listado-producto/listado-producto.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { PerfilInvitadoComponent } from './componentes/perfil-invitado/perfil-invitado.component';
import { PerfilAdminComponent } from './componentes/perfil-admin/perfil-admin.component';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';
import { PerfilGuardGuard } from './servicios/guard/perfil-guard.guard';

import { AdminGuard } from './servicios/guard/admin.guard';
import { InvitadoGuard } from './servicios/guard/invitado.guard';
import { UsuarioGuard } from './servicios/guard/usuario.guard';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilEmpleadoComponent } from './componentes/perfil-empleado/perfil-empleado.component';
import { PerfilMozoComponent } from './componentes/perfil-mozo/perfil-mozo.component';
import { DinoJuegpComponent } from './componentes/dino-juegp/dino-juegp.component';



const routes: Routes = [

  { path: 'perfil', component: PerfilInvitadoComponent, canActivate: [PerfilGuardGuard] },
  { path: 'admin', component: PerfilAdminComponent, canActivate: [AdminGuard] },
  { path: 'cliente', component: PerfilUsuarioComponent, canActivate: [UsuarioGuard] },
  { path: 'empleado', component: PerfilEmpleadoComponent },
  { path: 'mozo', component: PerfilMozoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevoHome', component: DinoJuegpComponent },
 /*  { path: '', redirectTo: '/nuevoHome', pathMatch: 'full' } */
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
