import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Container, Button, PostFormContainer, CenteredContainer, Form, FormGroup, FormField, FormLabel, StyledButton } from './Style';
import useSongForm from '../../hooks/useSongForm';

const PostSongForm = ({ onSubmitSuccess, onCancel }) => {
  const {
    songData,
    expanded,
    handleSubmit,
    handleChange,
    handleCancel,
    handleToggle,
  } = useSongForm({ onSubmitSuccess, onCancel });

  return (
    <Container>
      {!expanded && (
        <Button onClick={handleToggle}>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.2em' }} />
          <span>Adicionar Música</span>
        </Button>
      )}
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
                  Título:
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
                  Artista:
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
                  URL:
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

export default PostSongForm;
