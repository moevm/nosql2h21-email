const { Database, aql } = require('arangojs');
const db = new Database({
    url: 'http://127.0.0.1:8529'
});

const DB_NAME = 'emails';
db.useDatabase(DB_NAME);
db.useBasicAuth('root', '');
const Message = db.collection('Message');

module.exports = {
    getAllMessages: async () => {
        const result = [];
        const messages = await db.query(aql`FOR message in ${Message} RETURN message`);
        for await (let message of messages) {
            result.push(message);
        }
        return result;
    },
}