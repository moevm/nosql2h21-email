const arango = require('arangojs')
const db = new arango.Database()

async function start() {
    await db.dropDatabase('hello_world_db');

    console.log('Create Database hello_world_db...');
    await db.createDatabase('hello_world_db');
    db.useDatabase('hello_world_db');
    console.log('Create Collection helloWorldCollection...');
    const collection = db.collection('helloWorldCollection');
    await collection.create();
    const doc = {
        _key: 'firstDocument',
        name: 'HelloWorld'
    };
    console.log('Create Document', JSON.stringify(doc, null, 2), "...");
    await collection.save(doc);
    console.log('Fetch Document...');
    const document = await collection.document('firstDocument');
    console.log(JSON.stringify(document, null, 2));
    console.log('Remove Document...');
    await collection.remove('firstDocument');
}

start().catch(err => console.error(err))
