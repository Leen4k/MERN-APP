const express = require('express')
const {createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController')
const router = express.Router();
// const Workout = require('../models/workoutModel')


// GET ALL WORKOUTS
router.get('/', getAllWorkouts);

//GET SINGLE WORKOUT
router.get('/:id', getWorkout);

//POST/CREATE WORKOUT 

router.post("/", createWorkout);

//DELETE WORKOUT

router.delete("/:id",deleteWorkout);

//UPDATE WORKOUT

router.patch("/:id", updateWorkout);




module.exports = router;
