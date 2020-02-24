import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RolesComponent } from './roles/roles.component';
import { TempDatabindingComponent } from './temp-databinding/temp-databinding.component';
import { HeaderComponent } from './header/header.component';
import { TempComponent } from './temp/temp.component';
import { ProductComponent } from './product/product.component';


//ngrx 
import {StoreModule} from '@ngrx/store';
import { reducer } from './product/product.reduce';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RolesComponent,
    TempDatabindingComponent,
    HeaderComponent,
    TempComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('products', reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
