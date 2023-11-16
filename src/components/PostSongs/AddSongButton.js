import React from 'react';
import { ToggleButton } from './Style';

const PostButton = ({ expanded, onClick }) => {
  return (
    <ToggleButton onClick={onClick}>
      {expanded ? 'Esconder Formulário' : 'Adicionar Música'}
    </ToggleButton>
  );
};

export default PostButton;
