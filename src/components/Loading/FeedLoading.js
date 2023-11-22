import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PulseLoader = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  animation: ${pulse} 1.5s infinite;
`;

const FeedLoading = () => (
  <LoadingContainer>
    <PulseLoader />
  </LoadingContainer>
);

export default FeedLoading;
