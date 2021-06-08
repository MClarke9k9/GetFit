<<<<<<< HEAD
=======

>>>>>>> 526eed23953d0d612cf8f98f8134c4fb09cab8c4
const router = require("express").Router();
const path = require("path");

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
