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
import { CenteredContainer, FormField, FormGroup, FormLabel, UpdateFormContainer } from '../UpdateSongs/Style';

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
      <UpdateFormContainer>
        <CenteredContainer>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="form__group field">
                <FormField
                  type="text"
                  name="title"
                  value={songData.title}
                  onChange={handleChange}
                  expanded={expanded}
                  required
                  placeholder="Título"
                />
                <FormLabel htmlFor="title" className="form__label">
                  Título
                </FormLabel>
              </FormGroup>
              <FormGroup className="form__group field">
                <FormField
                  type="text"
                  name="artist"
                  value={songData.artist}
                  onChange={handleChange}
                  expanded={expanded}
                  required
                  placeholder="Artista"
                />
                <FormLabel htmlFor="artist" className="form__label">
                  Artista
                </FormLabel>
              </FormGroup>
              <FormGroup className="form__group field">
                <FormField
                  type="url"
                  name="url"
                  value={songData.url}
                  onChange={handleChange}
                  expanded={expanded}
                  required
                  placeholder="URL"
                />
                <FormLabel htmlFor="url" className="form__label">
                  URL
                </FormLabel>
              </FormGroup>
              <Button type="submit">Postar Música</Button>
            </Form>
        </CenteredContainer>
      </UpdateFormContainer>
          )}
    </Container>
  );
};

export default SongForm;