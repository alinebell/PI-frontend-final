import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch:"full"},
  
  
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastroComponent},

  {path: 'inicio', component: InicioComponent},
  {path: 'sobre', component: SobreComponent},
  
  {path: 'categorias', component: CategoriaComponent},
  {path: 'produtos', component: ProdutoComponent},

  {path: 'categoria-edit/:id', component: CategoriaEditComponent},
  {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},

  {path: 'user-edit/:id', component: UserEditComponent}

  
    
  ];
  

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
  })
  export class AppRoutingModule { }
  
