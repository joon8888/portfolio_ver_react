import './../styles/components/Header.scss';

const Header = () => {

  return (
    <header className="header">
      <h1 className="header__logo">
        <a href="./">
          YOU JO<em className="header__logo--small">in</em> ON.
        </a>
      </h1>
    </header>
  );
};

export default Header;
