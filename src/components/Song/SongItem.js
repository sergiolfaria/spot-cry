import React, { useState, useRef } from 'react';
import UpdateForm from '../UpdateSongsForm/UpdateForm';
import OptionsButton from './OptionsContainer';
import { SongArtist, SongDetails, SongItemContainer, SongTitle, PlayButton, ButtonsContainer} from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const SongItem = ({ song, index, handleDelete, handleEdit, onPlay, editingSongId, setEditingSongId }) => {
  const songItemContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOptionClick = (option) => {
    if (option === 'edit') {
      handleEdit(song.id);
    } else if (option === 'delete') {
      handleDelete(song.id);
    }
  };

  return (
    <SongItemContainer
      ref={songItemContainerRef}
      key={song.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SongDetails>
        <SongTitle>{index + 1} {song.title}</SongTitle>
        <SongArtist>{song.artist}</SongArtist>
      </SongDetails>

      <ButtonsContainer>
        {isHovered && (
          <>
            <PlayButton onClick={() => onPlay(song)}>
              <FontAwesomeIcon icon={faPlay} />
            </PlayButton>
            <OptionsButton onOptionClick={(option) => handleOptionClick(option)} showIcon={isHovered} song={song} />
          </>
        )}
      </ButtonsContainer>

      {editingSongId === song.id && (
        <UpdateForm
          songId={song.id}
          onCancel={() => setEditingSongId(null)}
        />
      )}
    </SongItemContainer>
  );
};

export default SongItem;
