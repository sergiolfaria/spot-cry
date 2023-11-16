import React, { useState } from 'react';
import { postSongsToData } from '../../services/addNewSong';
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
  ToggleButton,
} from '../PostSongs/Style';

const SongForm = ({ onSubmitSuccess }) => {
  const [songData, setSongData] = useState({
    title: '',
    artist: '',
    url: '',
  });
  const [expanded, setExpanded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await postSongsToData(songData);
      setSongData({
        title: '',
        artist: '',
        url: '',
      });

      alert('Música postada com sucesso!');

      // Chama a função de callback se fornecida
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
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

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Button onClick={handleToggle}>
        {expanded ? 'Cancelar' : 'Adicionar Música'}
      </Button>
      {expanded && (
        <Form onSubmit={handleSubmit}>
          <Label>
            <Input
              type="text"
              name="title"
              value={songData.title}
              onChange={handleChange}
              expanded={expanded}
              required
              placeholder='Título'
            />
          </Label>
          <Label>
            <Input
              type="text"
              name="artist"
              value={songData.artist}
              onChange={handleChange}
              expanded={expanded}
              required
              placeholder='Artista'
            />
          </Label>
          <Label>
            <Input
              type="url"
              name="url"
              value={songData.url}
              onChange={handleChange}
              expanded={expanded}
              required
              placeholder='URL'
            />
          </Label>
          <Button type="submit">Postar Música</Button>
        </Form>
      )}
    </Container>
  );
};

export default SongForm;