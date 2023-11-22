import React, { useState } from 'react';
import { postSongsToData } from '../../services/addNewSong';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
  ToggleButton,
  CenteredContainer, FormField, FormGroup, FormLabel, PostFormContainer, Buttons, StyledButton
} from '../PostSongs/Style';

const SongForm = ({ onSubmitSuccess, onCancel }) => {
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
  const handleCancel = () => {
    setSongData({
      title: '',
      artist: '',
      url: '',
    });
    setExpanded(false);
  };

  const handleToggle = () => {
    setExpanded(true);
  };

  return (

    <Container>
      <Button onClick={handleToggle}>
  <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.2em' }} />
  <span>Adicionar Música</span>
</Button>
      {expanded && (
        <PostFormContainer>
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

              <StyledButton isCancel={true} onClick={handleCancel}>Cancelar</StyledButton>
              <StyledButton type="submit">Postar Música</StyledButton>

            </Form>
          </CenteredContainer>
        </PostFormContainer>
      )}
    </Container>
  );
};

export default SongForm;