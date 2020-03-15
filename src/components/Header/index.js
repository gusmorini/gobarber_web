import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo-purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">dashboard</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>nome usuario</strong>
              <Link to="/profile">meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="nome usuario"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}