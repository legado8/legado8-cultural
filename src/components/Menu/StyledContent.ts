import styled from 'styled-components';

export const StyledContent = styled.main`
  transition: left .3s ease;
  position: absolute;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  left: ${({ open }) => (open ? '-320px' : '0')};
  top: 0;
`;
