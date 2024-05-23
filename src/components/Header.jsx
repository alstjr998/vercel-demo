import '../assets/index.css';
import Menu from './Menu';

const Header = () => (
  <header>
    <div id="leftBlank"></div>
    <div id="logo">
      <a href="index.html">
        <img src="src/img/logo.png" alt="logo" />
        <p>어울링</p>
      </a>
    </div>
    <Menu />
  </header>
);

export default Header;
