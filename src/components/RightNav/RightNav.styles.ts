import styled from 'styled-components';

interface Props {
    open: boolean;
  }

export const NavList = styled.ul<Props>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    margin-top: 0;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const NavItem = styled.li`
  padding: 18px 10px;
`;