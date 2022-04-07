const router = require("express").Router();
const { Commentrate } = require("../../models");

router.get("/", (req, res) => {
  Commentrate.findAll()
    .then((CommentrateData) => res.json(CommentrateData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single rating and comment pair
router.get('/:id', (req, res) => {

  Commentrate.findOne(req.params.id).then((CommentrateData) => {
    res.json(CommentrateData);
  });
});


router.post("/", (req, res) => {
    Commentrate.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id,
    rating: req.body.rating,
    game_id: req.body.rating
  })
    .then((CommentrateData) => res.json(CommentrateData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
    Commentrate.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((CommentrateData) => {
      if (!CommentrateData) {
        res.status(404).json({ message: "No comment or rating found with provided id!" });
        return;
      }
      res.json(CommentrateData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
