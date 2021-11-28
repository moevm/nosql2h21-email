const { Database, aql } = require('arangojs');
const db = new Database({
    url: 'http://127.0.0.1:8529'
});

const DB_NAME = 'emails';
db.useDatabase(DB_NAME);
db.useBasicAuth('root', '');
const Account = db.collection('Account');

module.exports = {
    getAllAccounts: async () => {
        const result = [];
        const accounts = await db.query(aql`FOR account in ${Account} RETURN account`);
        for await (let account of accounts) {
            result.push(account);
        }
        return result;
    }
}