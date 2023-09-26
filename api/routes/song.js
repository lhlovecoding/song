var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.get("/list", function (req, res, next) {
  res.json({
    code: 200,
    msg: "success",
    data: [
      {
        id: 998,
        title: "七里香",
        singer: "周杰伦",
        url: "稻香 - 周杰伦.mp3",
        // lrc: fs.readFileSync("/mp3/稻香 - 周杰伦.lrc").toString(),
      },
      {
        id: 678,
        title: "搁浅",
        singer: "周杰伦",
        url: "搁浅 - 周杰伦.mp3",
        // lrc: fs.readFileSync("/mp3/搁浅 - 周杰伦.lrc").toString(),
      },
    ],
  });
});
router.get("/detail", function (req, res, next) {
  if (req.query.id == 998) {
    res.json({
      code: 200,
      msg: "success",
      data: {
        id: 998,
        title: "七里香",
        singer: "周杰伦",
        url: "稻香 - 周杰伦.mp3",
        lrc: fs.readFileSync("/mp3/稻香 - 周杰伦.lrc").toString(),
      },
    });
  } else {
    res.json({
      code: 200,
      msg: "success",
      data: {
        id: 678,
        title: "搁浅",
        singer: "周杰伦",
        url: "搁浅 - 周杰伦.mp3",
        lrc: fs.readFileSync("/mp3/搁浅 - 周杰伦.lrc").toString(),
      },
    });
  }
});
module.exports = router;
