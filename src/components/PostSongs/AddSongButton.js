import React from 'react';
import { ToggleButton } from './Style';

const PostButton = ({ onClick }) => {
  return (
    <ToggleButton onClick={onClick}>
      Adicionar Música
    </ToggleButton>
  );
};

export default PostButton;
