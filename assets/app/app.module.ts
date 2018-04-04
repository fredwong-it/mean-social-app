import { MessageModule } from './messages/message.module';
import { ErrorService } from './errors/error.service';
import { AuthService } from './auth/auth.service';
import { SignupComponent } from './auth/signup.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { LogoutComponent } from './auth/logout.component';
import { SigninComponent } from './auth/signin.component';
import { HttpModule } from '@angular/http';
import { ErrorComponent } from './errors/error.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        routing,
        ReactiveFormsModule,
        HttpModule,
        MessageModule
    ],
    providers: [
        AuthService,
        ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}