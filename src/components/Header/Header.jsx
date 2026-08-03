import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">HappyPace</NavLink>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tours">Tours</NavLink>
        <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">Hotel</a>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/guides">Guides</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;