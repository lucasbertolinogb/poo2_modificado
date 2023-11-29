import express from "express";
import UserRoutes from "./routes/UserRoutes";

const app = express();

app.use(express.json());
app.use(UserRoutes);

const port = 5432;

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})