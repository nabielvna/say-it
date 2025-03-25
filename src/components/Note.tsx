import React, { useState } from "react";

interface Note {
  id: number;
  title: string;
  content: string;
}

interface NoteProps {
  note: Note;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string, newContent: string) => void;
}

const Note: React.FC<NoteProps> = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  const handleSave = () => {
    onEdit(note.id, editTitle, editContent);
    setIsEditing(false);
  };

  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow-md max-w-sm w-full">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-1 px-4 rounded mr-2 hover:bg-green-600 hover:scale-105 transition transform"
          >
            Simpan
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600 hover:scale-105 transition transform"
          >
            Batal
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold break-words">{note.title}</h3>
          <p className="text-gray-700 break-words">{note.content}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded mr-2 hover:bg-blue-600 hover:scale-105 transition transform"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="mt-2 bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 hover:scale-105 transition transform"
          >
            Hapus
          </button>
        </div>
      )}
    </div>
  );
};

export default Note;