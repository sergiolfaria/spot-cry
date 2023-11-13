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

const SongForm = () => {
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
      <ToggleButton onClick={handleToggle}>
        {expanded ? 'Esconder Formulário' : 'Adicionar Música'}
      </ToggleButton>
      {expanded && (
        <Form onSubmit={handleSubmit}>
          <Label>
            Título:
            <Input
              type="text"
              name="title"
              value={songData.title}
              onChange={handleChange}
              expanded={expanded}
            />
          </Label>
          <Label>
            Artista:
            <Input
              type="text"
              name="artist"
              value={songData.artist}
              onChange={handleChange}
              expanded={expanded}
            />
          </Label>
          <Label>
            URL:
            <Input
              type="text"
              name="url"
              value={songData.url}
              onChange={handleChange}
              expanded={expanded}
            />
          </Label>
          <Button type="submit">Postar Música</Button>
        </Form>
      )}
    </Container>
  );
};

export default SongForm;