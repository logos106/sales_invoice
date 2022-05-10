const express = require("express");
const router = express.Router();
const Joi = require("joi");

const admin = require("server/middleware/admin");
const salesman = require("server/middleware/salesman");
const authorize = require("server/middleware/authorize");
const validateRequest = require("server/middleware/validate-request");
const shipmentController = require("server/controller/shipment.controller");

router.post("/create", authorize(), createSchema, shipmentController.create);
router.get("/products", shipmentController.getProducts);
router.get("/", admin(), getAll);
router.get("/:id", getById);
router.put("/:id", admin(), createSchema, shipmentController.update);
router.delete("/:id", admin(), _delete);

module.exports = router;

function createSchema(req, res, next) {
  const schema = Joi.object({
    ponumber: Joi.string().allow("").required(),
    orderDate: Joi.date().allow(null).required(),
    arrivalDate: Joi.date().allow("").required(),
    chairs: Joi.array().required(),
    desks: Joi.array().required(),
    accessories: Joi.array().required(),
  });
  validateRequest(req, next, schema);
}

function getAll(req, res, next) {
  shipmentController
    .getAll()
    .then((shipments) => res.json(shipments))
    .catch(next);
}

function getById(req, res, next) {
  shipmentController
    .getById(req.params.id)
    .then((shipment) => res.json(shipment))
    .catch(next);
}

function _delete(req, res, next) {
  shipmentController
    .delete(req.params.id)
    .then(() => res.json({ message: "SalesOrder was deleted successfully." }))
    .catch(next);
}
