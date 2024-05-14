const db = require('./connection');
const { User, Sheet } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('User', 'users');
    await cleanDB('Sheet', 'sheets');

    await Sheet.create({
        player_name: 'Test',
        char_name: 'Tester',
        char_class: 'Test',
        char_multiclass: 'Test',
        char_level: '1'
    });

    console.log('sheets seeded');

    await User.create({
        username: 'raythomas',
        email: 'ray@testmail.com',
        password: '1234password',
        sheets: [
            {
                player_name: 'Test',
                char_name: 'Test',
                char_class: 'Test',
                char_multiclass: 'Test',
                char_level: '1',
                char_strength: '5',
                char_dexterity: '5',
                char_constitution: '5',
                char_intelligence: '5',
                char_wisdom: '5',
                char_charisma: '5',
                
            }
        ]
      });

      console.log('users seeded');

      process.exit();
});