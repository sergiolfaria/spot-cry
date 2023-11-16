import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const OptionsButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const OptionsButtonIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  background: none;
  border: none;
  cursor: pointer;
`;

const OptionsList = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;

  button {
    width: 100%;
    padding: 10px;
    text-align: left;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const OptionsButton = ({ onOptionClick }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <OptionsButtonContainer>
      <OptionsButtonIcon icon={faEllipsis} onClick={toggleOptions} />
      <OptionsList show={showOptions}>
        <button onClick={() => onOptionClick('edit')}>Editar</button>
        <button onClick={() => onOptionClick('delete')}>Excluir</button>
      </OptionsList>
    </OptionsButtonContainer>
  );
};

export default OptionsButton;
