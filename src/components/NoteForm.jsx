import { useEffect, useState } from "react";

const NoteForm = ({ onSubmit, initialDate }) => {
  const [ note, setNote ] = useState(initialDate);

  useEffect(() => {
    setNote[initialDate];
  }, [initialDate]);

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-300 rounded-lg max-w-4xl mx-auto p-10"
    >
      <input
        className="block w-full mb-8 input lg:input-lg focus:outline-0 focus:ring-0 border-0"
        required
        type="text"
        placeholder="Titulo"
        id="title"
        name="title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        required
        className="input lg:input-lg resize-y w-full mb-8 focus:outline-0 border-0 textarea"
        name="description"
        id="description"
        placeholder="Description de la nota"
        value={note.description}
        onChange={handleChange}
      ></textarea>
      <button className="btn btn-soft btn-primary">Guardar</button>
    </form>
  );
};

export default NoteForm;
