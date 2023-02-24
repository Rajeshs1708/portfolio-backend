const express = require('express')
const router = express.Router()

const Client = require('../Models/client.model')

//To create an Client
router.post('/create-client', async (req, res) => {
  try {
    const payload = req.body
    const employee = new Client(payload)
    await employee.save((err, data) => {
      if (err) {
        return res.status(400).send('Please fill the input')
      }
      res.status(201).send({
        status: 'Request sent successfully',
        data: data
      })
    })
  } catch (err) {
    res.status(500).send('Internal Server Error', err)
  }
})

//To get All the Client
router.get('/get-all-client', (req, res) => {
  try {
    Client.find((err, data) => {
      if (err) {
        return res.status(400).send('Error while getting Client')
      }
      res.status(201).send(data)
    })
  } catch (err) {
    res.status(500).send('Internal Server Error', err)
  }
})

//To get Specific Client
router.get('/get-single-employees/:id', (req, res) => {
  try {
    Employee.find({ _id: req.params.id }, (err, data) => {
      if (err) {
        return res.status(400).send('Error while getting the employee details')
      }
      res.status(200).send(data)
    })
  } catch (err) {
    res.status(500).send('Internal Server Error')
  }
})

//To remove an Existing Client
router.delete('/delete-employee/:id', (req, res) => {
  try {
    Employee.deleteOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        return res.status(400).send('error while removing and employee')
      }
      res.status(201).send('employee removed successfully')
    })
  } catch (err) {
    res.status(500).send('Internal Server Error', err)
  }
})

module.exports = router
