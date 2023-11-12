import React, { useState } from 'react';
import {postSongsToData}  from '../../services/addNewSong';

const SongForm = () => {
  const [songData, setSongData] = useState({
    title: '',
    artist: '',
    url: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await postSongsToData(songData);
      setSongData({
        title: '',
        artist: '',
        url: ''
      });

      alert('Música postada com sucesso!');
    } catch (error) {
      console.error('Erro ao postar a música:', error);
      alert('Erro ao postar a música. Por favor, tente novamente.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSongData({
      ...songData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Postar Nova Música</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={songData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Artista:
          <input
            type="text"
            name="artist"
            value={songData.artist}
            onChange={handleChange}
          />
        </label>
        <br />
        
        <label>
          URL:
          <input
            type="text"
            name="url"
            value={songData.url}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Postar Música</button>
      </form>
    </div>
  );
};

export default SongForm;
