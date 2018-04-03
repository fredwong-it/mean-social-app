import { User } from "./user.model";
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { ErrorService } from '../errors/error.service';

@Injectable()
export class AuthService {
    constructor(private http: Http, private errorService: ErrorService) {}

    signup(user: User) {
        const body = JSON.stringify(user)
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user', body, { headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());         // need to convert the error json to Observable manually
            });   
    }

    signin(user: User) {
        const body = JSON.stringify(user)
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user/signin', body, { headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());         // need to convert the error json to Observable manually
            });   
    }

    logout() {
        localStorage.clear();       // without the token I can't access restrict resources
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}