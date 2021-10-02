const mongoose = require("mongoose");
const Student = require("./../db/Student");

const dbURI =
  "mongodb+srv://rohit:1234@cluster0.txmxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log(err));

const getSingle = (req, res) => {
  //res.send('Attendance Management System');
  Student.find({ rollNumber: req.params.id }).then((result) => {
    res.status(200).json(result);
  });
};

const getMultiple = (req, res) => {
  Student.find()
    .then((result) => {
      res.status(200).json({
        status: "Success",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getClass = (req, res) => {
  Student.find({ class: req.params.id })
    .then((result) => {
      res.status(200).json({
        status: "Success",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Mark attendance for single student
const markSingle = (req, res) => {
  //console.log(req.body)
  student = new Student({
    rollNumber: req.body.rollNumber,
    name: req.body.name,
    status: req.body.status,
    class: req.body.class,
  });
  student
    .save()
    .then((result) => {
      res.status(200).json({
        status: "status",
        data: result,
      });
    })
    .catch((err) => console.log(err));
};

const markMultiple = (req, res) => {
  console.log(res.body); //Array/List Format
  Student.insertMany(req.body)
    .then((result) => {
      res.status(200).json({
        status: "Success",
        data: result,
      });
    })
    .catch((err) => console.log(err));
};

const updateSingle = (req, res) => {
  Student.findOneAndUpdate({ rollNumber: req.params.id }, req.body)
    .then((result) => {
      res.status(200).json({
        status: "Success",
        data: result,
      });
    })
    .catch((err) => console.log(err));
};

const updateMultiple = (req, res) => {
  Student.updateMany({ class: req.params.id }, req.body)
    .then((result) => {
      res.status(200).json({
        status: "Success",
        data: result,
      });
    })
    .catch((err) => console.log(err));
};

const deleteSingle = (req, res) => {
  Student.findOneAndRemove({ rollNumber: req.params.id })
    .then((result) => {
      res.status(200).json({
        status: "Success",
        data: result,
      });
    })
    .catch((err) => console.log(err));
};

const deleteMultiple = (req, res) => {
    Student.deleteMany({class: req.params.id})
    .then((result) => {
        res.status(200).json({
          status: "Success",
          data: result,
        });
      })
      .catch((err) => console.log(err));
};

module.exports = {
  getSingle,
  getMultiple,
  getClass,
  markSingle,
  markMultiple,
  updateSingle,
  updateMultiple,
  deleteSingle,
  deleteMultiple,
};
