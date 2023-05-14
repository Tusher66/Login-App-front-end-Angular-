import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { LoginService } from './Service/login.service';
import { AuthGuard } from './Service/auth.guard';
import { AuthInterceptor } from './Service/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RegistrationPageComponent } from './Component/registration-page/registration-page.component';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashBoardComponent,
    RegistrationPageComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule, 
    ToastrModule.forRoot(),

    
  ],
  providers: [LoginService, AuthGuard, [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
