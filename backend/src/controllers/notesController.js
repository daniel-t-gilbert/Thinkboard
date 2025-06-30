export const getAllNotes = (req, res) => {
  res.status(200).json({ message: "You have notes" });
};

export const createNote = (req, res) => {
  res.status(201).json({ message: "You have created a note!" });
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: "You have updated a note!" });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "You have deleted a note!" });
};