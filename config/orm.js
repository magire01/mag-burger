const connection = require("./connection");

class ORM {
    constructor (connection) {
        this.connection = connection;
    }
    selectAll(table, cb) {
        connection.query("SELECT * FROM ??", [table], (err, data) => {
            if (err) throw err;
            console.log("ORM DATA TEST: ", data);
            cb(data);
        });
    }
    
    insertOne(table, insertData, cb) {
        connection.query("INSERT INTO ?? SET ?", [table, insertData], (err, data) => {
            if (err) throw err;
            console.log("ORM DATA TEST: ", data);
            cb(data);
        });
    }

    updateOne(table, rowData, objData, cb) {
        connection.query("UPDATE ?? SET ? WHERE ? ", [table, rowData, objData], (err, data) => {
            if (err) throw err;
            console.log("ORM DATA TEST: ", data);
            cb(data);
        });
    }

    //delete
}

module.exports = new ORM (connection);

