import { useState, useEffect } from "react";
import  {updateMusicsFromData} from '../services/Songs/updateMusicsFromData'
import { getMusicsFromData } from "../services/Songs/getMusicData";

const useUpdateForm = ({ songId, onCancel, onUpdateSuccess }) => {
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

  return {
    updatedData,
    handleChange,
    handleUpdate,
    onCancel,
  };
};

export default useUpdateForm;
