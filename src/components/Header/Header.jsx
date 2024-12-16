import { useEffect, useState } from "react";
import { Link , useLocation} from "react-router-dom";
import "./Header.scss";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 300); // 500ms (yarım saniye) gecikme
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div className="headerTop">
        <div className="container">
          <div className="headerTopWrapper">
            <div><span>Zamansız bir dokunuş</span></div>
            <div className="iconss">
              <span className="none">Bizlerle iletişime geçin</span>
              <InstagramIcon className="icon" />
              <WhatsAppIcon className="icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="headerBottom">
        <div className="container">
          <div className="headerWrapper">
            <div className="logo" to="/">
              <img src="/images/logo/PNG3.png" alt="" />
            </div>

            <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
              <ul className="menu-list">
                <li className="menu-list-item">
                  <Link className="menu-link" to="/" onClick={closeMenu}>
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <Link className="menu-link" to="/projeler" onClick={closeMenu}>
                    Projelerimiz
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-link" to="/hakkimizda" onClick={closeMenu}>
                    Hakkımızda
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link className="menu-link" to="/iletisim" onClick={closeMenu}>
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hamburger" onClick={toggleMenu}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
