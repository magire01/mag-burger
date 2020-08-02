const orm = require("../config/orm");
const connection = require("../config/connection");

const burgerObj = {
    showBurgers: (cb) => {
        orm.selectAll("burger", data => {
            console.log("ShowBurgersTEST: ", data);
            cb(data);
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

module.exports = burgerObj;