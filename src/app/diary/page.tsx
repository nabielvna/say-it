"use client";

import React, { useState } from "react";
import Note from "@/components/Note";

const DiaryPage = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Catatan Pertama", content: "Ini adalah catatan pertama saya." },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const addNote = () => {
    if (newTitle && newContent) {
      setNotes([...notes, { id: Date.now(), title: newTitle, content: newContent }]);
      setNewTitle("");
      setNewContent("");
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id: number, newTitle: string, newContent: string) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, title: newTitle, content: newContent } : note
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Digital Diary</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Judul catatan"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <input
          type="text"
          placeholder="Isi catatan"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={addNote}
          className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600 hover:scale-105 transition transform"
        >
          Tambah
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        ))}
      </div>
    </div>
  );
};

export default DiaryPage;