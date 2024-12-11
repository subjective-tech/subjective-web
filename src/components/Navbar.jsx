import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  
  &:hover {
    color: #007bff;
  }
`;

const AppButton = styled.a`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavList>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </NavList>
      <AppButton href="https://app.yourcompany.com" target="_blank">Launch App</AppButton>
    </Nav>
  );
}

export default Navbar;
