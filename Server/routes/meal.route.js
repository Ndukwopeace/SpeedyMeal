const MealController  = require("../controllers/meal.controller")

module.exports = (app) =>{
    app.get("/api/meals", MealController.getAll)
    app.get("/api/meals/:id" , MealController.getOne)
    app.delete("/api/meals/:id" , MealController.deleteOne)
    app.post("/api/meals", MealController.createOne)
    app.put("/api/meals/:id", MealController.updateOne)

}