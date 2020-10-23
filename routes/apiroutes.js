const db  = require("../models/index");

const isTrue = module.exports = (req, res) => {
    res.json({
        success: true,
    });
}

module.exports = function(app) {
    app.get("/api/config", isTrue);
        
    app.get("/api/workouts", (req,res) =>{
        db.Workout.find({})
        .then(exercises => {
            res.json(exercises)
        }).catch(err => {
            console.log(err)
        });
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
        .then(db => {
            res.json(db);
        })
        .catch(err => {
            console.log(err);
        });
    });

    app.get("/api/workouts/range", (req,res) => {
        db.Workout.find({})
        .then(exercises=>{
        res.json(exercises)
        }).catch((err) => {
            console.log(err)
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOneAndUpdate( 
            {_id: req.params.id}, 
        {$push: {exercises:req.body}}
        ).then((workout) => {
            res.json(workout);
        }).catch((err) => {
            console.log(err);
        })
    });


 


}


  