import styled from '@emotion/styled';
// router
import { Link } from 'react-router-dom';

interface ContainerProps {
  isExpanded: boolean;
}

export const Container = styled(Link)<ContainerProps>`
  cursor: pointer;
  width: 100%;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: black;
  padding: 3px;
  ${({ isExpanded }) =>
    isExpanded && 'display: flex; align-items: center; margin-left: 1rem;'}
  &:hover {
    background-color: #dbdbdd;
  }
`;
