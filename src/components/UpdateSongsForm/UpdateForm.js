import React from "react";
import { CenteredContainer, FormField, FormGroup, FormLabel, StyledButton, UpdateFormContainer } from "./Style";
import useUpdateForm from '../../hooks/useUpdateForm';

const UpdateForm = ({ songId, onCancel, onUpdateSuccess }) => {
  const {
    updatedData,
    handleChange,
    handleUpdate,
  } = useUpdateForm({ songId, onCancel, onUpdateSuccess });

  return (
    <CenteredContainer>
      <UpdateFormContainer>
        <FormGroup className="form__group field">
          <FormField
            type="text"
            name="title"
            required
            value={updatedData.title}
            onChange={handleChange}
          />
          <FormLabel htmlFor="name" className="form__label">
            Titulo:
          </FormLabel>
        </FormGroup>
        <FormGroup className="form__group field">
          <FormField
            type="text"
            name="artist"
            required
            value={updatedData.artist}
            onChange={handleChange}
          />
          <FormLabel htmlFor="name" className="form__label">
            Artista:
          </FormLabel>
        </FormGroup>
        <FormGroup className="form__group field"></FormGroup>
        <br />
        <StyledButton isCancel={true} onClick={onCancel}>
          Cancelar
        </StyledButton>
        <StyledButton onClick={handleUpdate}>Atualizar Música</StyledButton>
      </UpdateFormContainer>
    </CenteredContainer>
  );
};

export default UpdateForm;
