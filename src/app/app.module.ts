import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './resources/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastroComponent } from './pages/contato/cadastro/cadastro.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CadastradoComponent } from './pages/contato/cadastrado/cadastrado.component';
import { GerenciarContatosComponent } from './pages/gerenciar-contatos/gerenciar-contatos.component';

import { FormatoTelefonePipe } from './resources/pipes/formato-telefone.pipe';

import { AlertService } from './resources/generic-services/alert.service';
import { CadastroService } from './pages/contato/cadastro/cadastro.service';
import { GerenciarContatosService } from './pages/gerenciar-contatos/gerenciar-contatos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CadastroComponent,
    GerenciarContatosComponent,
    MenuComponent,
    ContatoComponent,
    CadastradoComponent,
    FormatoTelefonePipe
  ],
  imports: [

  BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [
    GerenciarContatosService,
    CadastroService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
