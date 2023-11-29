import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const OptionsButtonContainer = styled.div`
  position: relative;
  z-index: 0;
`;

const OptionsList = styled.div`
  position: absolute;
  bottom: -30px;
  right: 4px; // Ajuste conforme necessário para posicionar à direita
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: none;
  background-color: ${COLORS.gray};
  border-radius: 8px;
  z-index: 1;
`;

const OptionItem = styled.button`
  padding: 8px;
  cursor: pointer;
  border: none;
  width: 100%;
  background-color: ${COLORS.gray};
  color: ${COLORS.white};
  border-radius: 8px;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: ${(props) => (props.className === 'delete' ? COLORS.red : COLORS.blue)};
    color: ${COLORS.white};
  }
`;

const OptionsButtonIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  display: ${(props) => (props.showIcon ? 'block' : 'none')};
`;

const OptionsContainer = ({ onOptionClick, showIcon, song }) => {
  const [showOptions, setShowOptions] = useState(false);
  const containerRef = useRef(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <OptionsButtonContainer ref={containerRef}>
      <OptionsButtonIcon icon={faEllipsis} showIcon={showIcon} onClick={toggleOptions} />
      <OptionsList show={showOptions}>
        <OptionItem onClick={() => onOptionClick('edit', song)} className="edit">
          Editar
        </OptionItem>
        <OptionItem onClick={() => onOptionClick('delete', song)} className="delete">
          Excluir
        </OptionItem>
      </OptionsList>
    </OptionsButtonContainer>
  );
};

export default OptionsContainer;
