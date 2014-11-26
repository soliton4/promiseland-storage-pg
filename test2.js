var ORM = require('postgresql-orm')

ORM.setup('postgres://sol:datasol44@localhost/test1')

var userEntityDefinition = {
    name: 'users', // will match table with name 'users'
    attributes: {
        email: {
            type: 'character varying',
            unique: true
        },
        firstName: {
            type: 'character varying'
        },
        lastName: {
            type: 'character varying'
        },
        createdDate: {
            type: 'timestamp with time zone'
        }
    }
}

var User = ORM.define(userEntityDefinition)

User.dropTable(function(err) {
    // existing table dropped
})

User.createTable(function(err) {
    // table created
})

// save or update, depending on the presence of an 'id' attribute
User.save({firstName: 'John'}, function(err, savedEntity) {
    // do something
    console.log(err); //savedEntity.id
})

User.create({firstName: 'John'}, function(err, createdEntity) {
    // do smthg
})

User.update({id: 123, lastName: 'Doe'}, function(err, updatedEntity) {
    // do smthg
})

User.load({id: 123}, function(err, loadedEntity) {
    // do smthg
})