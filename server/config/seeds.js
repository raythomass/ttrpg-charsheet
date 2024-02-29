const db = require('./connection');
const { User, Sheet } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('User', 'users');
    await cleanDB('Sheet', 'sheets');

    await Sheet.create({
        name: 'Drizz',
        class: 'Ranger',
        level: '15'
    });

    console.log('sheets seeded');

    await User.create({
        username: 'raythomas',
        email: 'ray@testmail.com',
        password: '1234password',
      });

      console.log('users seeded');

      process.exit();
});