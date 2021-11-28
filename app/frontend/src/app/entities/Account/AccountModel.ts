export namespace Account {
    export class AccountModel {
        constructor(
            private _id: string,
            public name: string,
            public email: string,
        ) {}

        get id() {
            return this._id;
        }
    }

    export function createCollection(json: any): AccountModel {
        const id = json?._key;
        const name = json?.name;
        const email = json?.email;
        if (id && name && email) {
            return new AccountModel(id, name, email);
        } else {
            return null;
        }
    }
}
