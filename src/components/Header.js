// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo">Minha Loja</div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/about">Sobre</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

// Footer.js
import React from 'react';

const Footer = () => (
  <footer>
    <p>© 2024 Minha Loja. Todos os direitos reservados.</p>
    <p>Contate-nos: contato@minhaloja.com</p>
    <div>
      <a href="https://facebook.com">Facebook</a>
      <a href="https://instagram.com">Instagram</a>
    </div>
  </footer>
);

export default Footer;