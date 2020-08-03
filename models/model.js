const orm = require("../config/orm");
const connection = require("../config/connection");

const burgerData = {
    showBurgers: (cb) => {
        orm.selectAll("burger", data => {
            console.log("ShowBurgersTEST: ", data);
            cb(data);
        });
    },
    filterNotDev: (cb) => {
        connection.query("SELECT id, burger, devoured FROM burger WHERE devoured = 0", (err, res) => {
            if (err) throw err;
            console.log("SHOW NOT DEVOURED TEST: ", res);
            cb(res);
        });
        
    },
    filterDev: (cb) => {
        connection.query("SELECT id, burger, devoured FROM burger WHERE devoured = 1", (err, resDev) => {
            if (err) throw err;
            console.log("SHOW NOT DEVOURED TEST: ", resDev);
            cb(resDev);
        });
    },
    insertBurgers: (insertData, cb) => {
        //do not have rowData and objData yet
        orm.insertOne("burger", insertData, data => {
            cb(data);
        })
    },

    updateBurgers: (rowData, objData, cb) => {
        //do not have rowData and objData yet
        orm.updateOne("burger", rowData, objData, data => {
            cb(data);
        })
    }
}

module.exports = burgerData;