import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';


import { SignupService  } from 'src/app/services/signup.service';



import {
MatCardModule,
MatTabsModule,
MatFormFieldModule,
MatInputModule,
MatButtonModule,
MatCheckboxModule,
MatIconModule, 
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RegisterComponent } from './register/register.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectComponent } from './connect/connect.component';
import { UniqueUsernameValidatorDirective } from './shared/unique-username-validator.directive';





@NgModule({
declarations: [

    

AppComponent,
RegisterComponent,
HomeComponent,
LoginComponent,
SignupComponent,
DashboardComponent,
ConnectComponent,
UniqueUsernameValidatorDirective




],
imports: [
BrowserModule,
BrowserAnimationsModule,
FormsModule,
MatInputModule, ReactiveFormsModule,
MatCardModule,
MatTabsModule,
MatFormFieldModule, RecaptchaModule,
MatButtonModule,
MatSlideToggleModule, HttpClientModule,
MatIconModule, AppRoutingModule, MatCheckboxModule, MatToolbarModule

],
providers: [SignupService],
bootstrap: [AppComponent]
})
export class AppModule { }