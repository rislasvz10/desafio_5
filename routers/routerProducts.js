const expres = require("express");
const router = expres.Router();

const Manager = require("../manager.js");
const manager = new Manager();

router.get("/", (req, res) => {
  let productsAll = manager.findAll();
  res.send(productsAll);
});

router.get("/:id", (req, res) => {
  let productosId = manager.findById(req.params.id);
  if (!productosId) return res.send({ error: "product was not found" });
  res.send(productosId);
});

router.post("/", (req, res) => {
  if (!req.body.title || !req.body.price || !req.body.thumbnail)
    return res.send({ error: "data is required" });
  let saveNewProduct = manager.save(req.body);
  res.send(saveNewProduct);
});

router.put("/:id", (req, res) => {
  if (!req.body.title || !req.body.price || !req.body.thumbnail)
    return res.send({ error: "data is required" });
  let updateProduct = manager.update(req.params.id, req.body);
  if (!updateProduct) return res.send({ error: "Product was not found"});
  res.send(updateProduct);
});


router.delete("/:id", (req, res) => {
  let deleteProduct = manager.delete(req.params.id);
  res.send(deleteProduct);
});


module.exports = router;
