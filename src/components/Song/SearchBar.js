import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../constants/colors';

const SearchBarWrapper = styled.div`
  /* Adicione estilos conforme necessário */
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5); /* Branco com baixa opacidade */
  outline: none; /* Remove a borda quando o input está focado */
`;

const SearchBar = ({ songs, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleButtonClick = () => {
    setIsInputVisible(true);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleBlur = () => {
    if (isInputVisible) {
      setIsInputVisible(false);
      onSearch(searchTerm);
    }
  };

  return (
    <SearchBarWrapper>
      {isInputVisible ? (
        <SearchInput
          type="text"
          placeholder="Search a song"
          value={searchTerm}
          onChange={handleSearch}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <SearchButton onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faSearch} style={{ color: COLORS.white }} />
        </SearchButton>
      )}
    </SearchBarWrapper>
  );
};

export default SearchBar;
