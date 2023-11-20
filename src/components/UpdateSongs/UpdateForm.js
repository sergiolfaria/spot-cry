import React, { useState, useEffect } from "react";
import { updateMusicsFromData } from "../../services/updateMusica";
import { getMusicsFromData } from "../../services/getMusicData";
import { CenteredContainer, FormField, FormGroup, FormLabel, Styledbutton, UpdateFormContainer } from "./Style";


const UpdateForm = ({ songId, onCancel, onUpdateSuccess }) => {
  const [updatedData, setUpdatedData] = useState({
    title: "",
    artist: "",
    
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
    
      });
    } catch (error) {
      console.error("Erro ao buscar dados da música:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateMusicsFromData(songId, updatedData);
      setUpdatedData({ title: "", artist: "" });
      onCancel();
      if (onUpdateSuccess) {
        onUpdateSuccess();
      }

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
        <FormGroup className="form__group field">
       
      </FormGroup>
      <br />
      <Styledbutton onClick={handleUpdate}>Atualizar Música</Styledbutton>
      <Styledbutton onClick={onCancel}>Cancelar</Styledbutton>
    </UpdateFormContainer>
    </CenteredContainer >
  );
};

export default UpdateForm;
