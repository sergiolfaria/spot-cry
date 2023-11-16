import React from 'react';
import UpdateForm from '../UpdateSongs/UpdateForm';
import OptionsButton from './OptionsButton';
import { SongArtist, SongDetails, SongItemContainer, SongTitle } from './Style';

function SongItem({ song, index, handleDelete, handleEdit, editingSongId, setEditingSongId }) {
  const handleOptionClick = (option) => {
    if (option === 'edit') {
      handleEdit(song.id);
    } else if (option === 'delete') {
      handleDelete(song.id);
    }
  };

  return (
    <SongItemContainer key={song.id}>
      <SongDetails>
        <SongTitle>{index + 1} {song.title}</SongTitle>
        <SongArtist>{song.artist}</SongArtist>
      </SongDetails>
      <OptionsButton onOptionClick={handleOptionClick} />
      {editingSongId === song.id && (
        <UpdateForm
          songId={song.id}
          onCancel={() => setEditingSongId(null)}
        />
      )}
    </SongItemContainer>
  );
}

export default SongItem;
