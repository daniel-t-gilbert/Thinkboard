import express from "express"
import { getAllNotes, createNote, updateNote, deleteNote } from "../controllers/notesController.js";

const router = express.Router();

// ---------------------------Method 2 without Controllers-----------------------------

// router.get("/", (req, res) => {
//   res.status(200).json({ message: "You have notes" });
// });

// router.post("/", (req, res) => {
//   res.status(201).json({ message: "You have created a note!" });
// });

// router.put("/:id", (req, res) => {
//   res.status(200).json({ message: "You have updated a note!" });
// });

// router.delete("/:id", (req, res) => {
//   res.status(200).json({ message: "You have deleted a note!" });
// });


// ---------------------------Method 3 with Controllers-----------------------------

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;