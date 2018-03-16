export class Message {
    content: string;
    username: string;
    messageId: string;
    userId: string;

    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string) {        
    }
}