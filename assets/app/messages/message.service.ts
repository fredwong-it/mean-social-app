import { Http, Response, Headers } from '@angular/http';
import { Message } from './message.model';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MessageService {
    private messages: Message[] = [];

    constructor(private http: Http) {}

    addMessage(message: Message) {
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', message)
            .map((response: Response) => response.json())                       // automatically convert the result to Observable
            .catch((error: Response) => Observable.throw(error.json()));        // need to convert the error json to Observable manually
    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}