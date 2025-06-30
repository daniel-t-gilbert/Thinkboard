import express from 'express'
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from './config/db.js'
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

connectDB();

// -------------------------------METHOD 1--------------------------------- 

// app.get("/api/notes", (req, res) => {
//     res.status(200).send("You have notes");
// });

// app.post("/api/notes", (req, res) => {
//   res.status(201).json({ message: "You have created a note!"});
// });

// app.put("/api/notes/:id", (req, res) => {
//   res.status(200).json({ message: "You have updated a note!" });
// });

// app.delete("/api/notes/:id", (req, res) => {
//   res.status(200).json({ message: "You have deleted a note!" });
// });

// app.listen(5001, () => {
//   console.log("Server started running on PORT : 5001");
// });

// -------------------------------METHOD 2 & 3--------------------------------- 

app.use("/api/notes", notesRoutes);
// We used the .use method and added the endpoint and the route that connects to the endpoint here.

app.listen(5001, () => {
    console.log("Server started running on PORT : ", port);
});
