const express = require("express");
const router = express.Router();

const Client = require("../Models/client.model");

//To create an Client
router.post("/create-client", async (req, res) => {
  const payload = req.body;
  const employee = new Client(payload);
  await employee
    .save()
    .then((data) => {
      res
        .status(200)
        .send({
          status: "success",
          message: "message sent successfuuly",
          data: data,
        });
    })
    .catch((error) => {
      res.status(500).send({ status: "fail", message: error.message });
    });
});

//To get All the Client
router.get("/get-all-client", async (req, res) => {
  try {
    const client = await Client.find();
    res.status(200).send({ status: "success", data: client });
  } catch (err) {
    res.status(500).send("Internal Server Error", err);
  }
});

//To get Specific Client
router.get("/get-single-employees/:id", (req, res) => {
  try {
    Employee.find({ _id: req.params.id }, (err, data) => {
      if (err) {
        return res.status(400).send("Error while getting the employee details");
      }
      res.status(200).send(data);
    });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

//To remove an Existing Client
router.delete("/delete-employee/:id", (req, res) => {
  try {
    Employee.deleteOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        return res.status(400).send("error while removing and employee");
      }
      res.status(201).send("employee removed successfully");
    });
  } catch (err) {
    res.status(500).send("Internal Server Error", err);
  }
});

module.exports = router;
