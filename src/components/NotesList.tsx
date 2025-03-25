import React, { useState } from "react";
import NoteComponent from "./Note"; // Ganti nama import agar tidak bentrok

interface NoteItem { // Ganti nama interface dari Note menjadi NoteItem
  id: number;
  title: string;
  content: string;
}

const NotesList: React.FC = () => {
  const [notes, setNotes] = useState<NoteItem[]>([
    { id: 1, title: "Catatan 1", content: "Isi catatan pertama" },
    { id: 2, title: "Catatan 2", content: "Isi catatan kedua" },
  ]);

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleEdit = (id: number, newTitle: string, newContent: string) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, title: newTitle, content: newContent } : note)));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Daftar Catatan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.map((note) => (
          <NoteComponent key={note.id} note={note} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
