import express from "express";
import { env } from "./lib/env.js";
import path from "path"
const app = express();



const __dirname = path.resolve()


app.get("/health", (req, res) => {
    res.status(200).json({ msg: "api is runing successfully"});
});


if(env.node_env=="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    
    app.get("/{*any}",(req,res)=>{
        res.sendFile(
    path.join(__dirname, "../frontend/dist/index.html")
);
    })
}

app.listen(env.Port, () => {
    console.log(`Server running on port ${env.Port}`);
});