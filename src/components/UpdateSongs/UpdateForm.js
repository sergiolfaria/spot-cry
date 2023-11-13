import React, { useState, useEffect } from "react";
import { updateMusicsFromData } from "../../services/updateMusica";
import { getMusicsFromData } from "../../services/getMusicData";

const UpdateForm = ({ songId, onCancel }) => {
  const [updatedData, setUpdatedData] = useState({
    title: "",
    artist: "",
    url: "",
  });

  useEffect(() => {
    fetchSongData(songId);
  }, [songId]);

  const fetchSongData = async (id) => {
    try {
      const response = await getMusicsFromData(id);
      const songData = response.data.song;

      setUpdatedData({
        title: songData.title || "",
        artist: songData.artist || "",
        url: songData.url || "",
      });
    } catch (error) {
      console.error("Erro ao buscar dados da música:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateMusicsFromData(songId, updatedData);
      setUpdatedData({ title: "", artist: "", url: "" });
      onCancel();
      alert("Música atualizada com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar a música:", error);
      alert("Erro ao atualizar a música. Por favor, tente novamente.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Atualizar Música</h2>
      <label>
        Título:
        <input
          type="text"
          name="title"
          value={updatedData.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Artista:
        <input
          type="text"
          name="artist"
          value={updatedData.artist}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        URL:
        <input
          type="text"
          name="url"
          value={updatedData.url}
          onChange={handleChange}
        />
      </label>
      <br />
      <button onClick={handleUpdate}>Atualizar Música</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
};

export default UpdateForm;
