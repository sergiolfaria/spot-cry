import React from 'react';
import UpdateForm from '../UpdateSongs/UpdateForm';
import { SongActionButtons, SongArtist, SongDetails, SongItemContainer, SongTitle } from './Style';

function SongItem({ song, index, handleDelete, handleEdit, editingSongId, setEditingSongId }) {
  return (
    <SongItemContainer key={song.id}>
      <SongDetails>
        <SongTitle>{index + 1} {song.title}</SongTitle>
        <SongArtist>{song.artist}</SongArtist>
      </SongDetails>
      <SongActionButtons>
        <button className="delete" onClick={() => handleDelete(song.id)}>Excluir</button>
        <button className="edit" onClick={() => handleEdit(song.id)}>Editar</button>
      </SongActionButtons>
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
