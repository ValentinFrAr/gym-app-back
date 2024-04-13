const dotenv = require("dotenv").config();
const db = require("../db");
const nodemailer = require("nodemailer");

exports.getExercise = async (req, res, next) => {
  const id = req.params.id;
  const query = `SELECT * FROM gym.exercises WHERE id=${id}`;
  db.query(query, (error, results, fields) => {
    if (error) {
      return res
        .status(400)
        .json({ message: "Exercise not found", error: error.message });
    }
    const response = results.rows[0];
    return res
      .status(200)
      .json({ message: "Exercise successfully founded", response: response });
  });
};

exports.getAllExercises = async (req, res, next) => {
  const query = `SELECT * FROM gym.exercises`;
  db.query(query, (error, results, fields) => {
    if (error) {
      return res
        .status(400)
        .json({ message: "Exercises not found", error: error.message });
    }
    const response = results.rows;
    return res
      .status(200)
      .json({ message: "Exercises successfully loaded", response: response });
  });
};