import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const OptionsButtonContainer = styled.div`
      position: relative;
      
`;

const OptionsButtonIcon = styled(FontAwesomeIcon)`
   cursor: pointer;
`;

const OptionsList = styled.div`
  position: absolute;
  top: 0;
  left:   -72px; 
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  background-color: #ffffff;
  border: none;
  
  
  z-index: 1;
 
`;

 const OptionItem = styled.button`
  padding: 8px;
  cursor: pointer;
  border:none;
  width:100%;
  background-color:white;
  &:hover {
    background-color:  ${COLORS.blue};
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
        <OptionItem onClick={() => onOptionClick('edit')}>Editar</OptionItem>
        <OptionItem onClick={() => onOptionClick('delete')}>Excluir</OptionItem>
      </OptionsList>
    </OptionsButtonContainer>
  );
};

export default OptionsButton;
