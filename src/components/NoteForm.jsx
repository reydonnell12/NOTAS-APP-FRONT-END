import { useEffect, useState } from "react";

export const NoteForm = ({ onSubmit, initialDate }) => {
  const [note, setNote] = useState(
    initialDate || { title: "", description: "" },
  );

  useEffect(() => {
    setNote(initialDate);
  }, [initialDate]);

  const handleChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(note);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-300 rounded-lg max-w-4xl mx-auto p-8"
    >
      <input
        className="border-0 block w-full input mb-8 lg:input-lg  focus:ring-0 focus:outline-amber-300"
        type="text"
        placeholder="titulo"
        id="title"
        name="title"
        value={note.title}
        onChange={handleChange}
        required
      />
      <textarea
        className="w-full input lg:input-lg resize-y mb-8 textarea focus:outline-0 border-0"
        name="description"
        id="description"
        value={note.description}
        onChange={handleChange}
        placeholder="descripción de la tarea"
      ></textarea>
      <button className="btn btn-soft btn-primary">Guardar</button>
    </form>
  );
};
