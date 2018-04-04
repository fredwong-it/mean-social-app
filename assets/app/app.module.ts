import { MessageModule } from './messages/message.module';
import { ErrorService } from './errors/error.service';
import { AuthService } from './auth/auth.service';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { HttpModule } from '@angular/http';
import { ErrorComponent } from './errors/error.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        routing,
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