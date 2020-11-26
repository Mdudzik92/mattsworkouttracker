const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {});

router.put("/api/workouts/:id", ({ body, params }, res) => {});

router.get("/api/workouts", (req, res) => {});

router.get("/api/workouts/range", (req, res) => {});

router.delete("/api/workouts", ({ body }, res) => {});

module.exports = router;