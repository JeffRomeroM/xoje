import React, { useState } from 'react';
import './Notas.css';

interface Note {
  id: number;
  title: string;
  content: string;
  imageURL: string | null;
}

export const NotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<Note>({
    id: Date.now(),
    title: '',
    content: '',
    imageURL: null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewNote({
          ...newNote,
          imageURL: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddNote = () => {
    if (newNote.title.trim() === '' || newNote.content.trim() === '') {
      alert('Por favor, complete el título y el contenido de la nota.');
      return;
    }

    setNotes([...notes, newNote]);
    setNewNote({
      id: Date.now(),
      title: '',
      content: '',
      imageURL: null,
    });
  };

  const handleDeleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Notas con Imágenes</h1>
      <div className="note-form">
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={newNote.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Contenido"
          value={newNote.content}
          onChange={handleInputChange}
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button onClick={handleAddNote}>Agregar Nota</button>
      </div>
      <div className="notes">
        {notes.map((note) => (
          <div className="note" key={note.id}>
            <h3>{note.title}</h3>
            {note.imageURL && <img src={note.imageURL} alt={note.title} />}
            <p>{note.content}</p>
            <button onClick={() => handleDeleteNote(note.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};
