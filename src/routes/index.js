import express from "express";
import serviceRoutes from "./serviceRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("BarberSystem");
    
        app.use(express.json(), serviceRoutes)
    }

)}
 
export default routes;