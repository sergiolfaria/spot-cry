import React, { useState, useEffect } from "react";
import { updateMusicsFromData } from "../services/updateMusica";
import { getMusicsFromData } from "../services/getMusicData";

export const UpdateForm = ({ songId }) => {
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

      // Atualize o estado com os dados da música
      setUpdatedData({
        title: songData.title,
        artist: songData.artist,
        url: songData.url,
        // Atualize outros campos conforme necessário
      });
    } catch (error) {
      console.error("Erro ao buscar dados da música:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      // Chame a função do serviço para atualizar os dados
      await updateMusicsFromData(songId, updatedData);

      // Limpe os campos após a atualização bem-sucedida (se necessário)
      setUpdatedData({
        title: "",
        artist: "",
        url: "",
        // Limpe outros campos conforme necessário
      });

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
      {/* Adicione outros campos conforme necessário */}
      <br />
      <button onClick={handleUpdate}>Atualizar Música</button>
    </div>
  );
};

 
