import { Account } from "../Account/AccountModel";
import AccountModel = Account.AccountModel;

export namespace Message {
    export class MessageModel {
        constructor(
            private _id: string,
            public sender: AccountModel,
            public recipient: AccountModel,
            public date: Date,
            public subject: String,
            public text: String,
            public replyTo: MessageModel
        ) {}

        get id() {
            return this._id;
        }
    }

    export function createCollection(json: any): MessageModel {
        const id = json?._key;
        const sender = json.message?.sender;
        const recipient = json.message?.recipient;
        const date = json.message?.date;
        const subject = json.message?.subject;
        const text = json.message?.text;
        const replyTo = json.message?.replyTo;

        return new MessageModel(id, sender, recipient, date, subject, text, replyTo);
    }
}
