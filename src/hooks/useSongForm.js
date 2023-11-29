// useSongForm.js
import { useState } from 'react';
import { postSongsToData } from '../services/Songs/addNewSong';

const useSongForm = ({ onSubmitSuccess, onCancel }) => {
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
  
      // Feche o formulário após a postagem bem-sucedida
      setExpanded(false);
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
    if (onCancel) {
      onCancel();
    }
  };

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded); // Toggle o valor atual de expanded
  };

  return {
    songData,
    expanded,
    handleSubmit,
    handleChange,
    handleCancel,
    handleToggle,
  };
};

export default useSongForm;
