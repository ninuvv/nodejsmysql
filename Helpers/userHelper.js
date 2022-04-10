const express = require("express");
const Router = express.Router();
const mysql = require("../connection");

module.exports = {
  getUsers: (companyId) => {
    return new Promise(async (resolve, reject) => {
      let sql = `select user.* from company inner  join user on company.companyid =user.companyid
                 where company.companyid= ${companyId}`;
      mysql.query(sql, (err, rows, fields) => {
        if (!err) resolve(rows);
        else throw reject(err);
      });
    });
  },
};
