import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { styled } from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 100%;
  border-radius: 10px;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <FontAwesomeIcon icon={faSpinner} spin  style={{ color: "#3d9bff", fontSize: "3em"}} />
      <p>Carregando...</p>
    </LoadingWrapper>
  );
};

export default Loading;
