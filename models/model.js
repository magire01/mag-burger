const orm = require("../config/orm");
const connection = require("../config/connection");

const burgerData = {
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
    },

    deleteBurgers: (objData, cb) => {
        //do not have rowData and objData yet
        orm.deleteOne("burger", objData, data => {
            cb(data);
        })
    }
}

module.exports = burgerData;