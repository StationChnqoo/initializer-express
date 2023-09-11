var express = require("express");
const { default: mongoose } = require("mongoose");
const { DBHelper } = require("../x/DBHelper");
const { StringUtils } = require("../x/StringUtils");
var router = express.Router();

/* GET users listing. */
router.get("/HelloWorld", function (request, response, next) {
  response.send(JSON.stringify({ data: "HelloWorld.", status: 0 }));
});

/** 测试 */
router.get("/test", async function (request, response, next) {
  let dbHelper = new DBHelper();
  let connection = await dbHelper.connectDatabase();
  console.log(request.query.action);
  // console.log("testDB.connectDatabase: ", connection.db == null);
  let datas = await connection.db.collection("test").find().toArray();
  dbHelper.disconnectDatabase(connection);
  response.send({
    data: {
      decode: StringUtils.encode(""),
      encode: StringUtils.decode('QEkJV1zLRkjCFUNxsBCaRw=='),
    },
    status: 0,
  });
});

module.exports = router;
