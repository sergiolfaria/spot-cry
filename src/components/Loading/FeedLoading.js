import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.05;
  }
  100% {
    opacity: 0.1;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PulseLoader = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  /* border-radius: 50%; */
  animation: ${pulse} 1.5s infinite;
`;

const FeedLoading = () => (
  <LoadingContainer>
    <PulseLoader />
  </LoadingContainer>
);

export default FeedLoading;
