import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerItem">
          <div className="logo">
            <a href="/">
              <img src="/images/logo/PNG3.png" alt="Akıllı Logo" />
            </a>
          </div>
          <div className="metin">
            <p>
              Kayayapı İnşaat, Çanakkale&apos;de güven ve kaliteyi temel alarak
              modern yaşam alanları inşa ediyor.
            </p>
            <p>
              Sağlam temeller, güçlü yapılar ve mutlu yaşam alanları için
              buradayız.
            </p>
          </div>
        </div>

        <div className="footerItem">
          <h3>Hizmetlerimiz</h3>
          <hr />
          <ul className="footerHizmet">
            <li>
              <span>Proje Tasarımı ve Planlama</span>
            </li>
            <li>
              <span>Anahtar Teslim İnşaat</span>
            </li>
            <li>
              <span>Restorasyon ve Renovasyon</span>
            </li>
          </ul>
        </div>

        <div className="footerItem">
          <h3>İletişim Bilgilerimiz</h3>
          <hr />
          <ul>
            <li className="sag">
              <a href="tel:+905386363206">
                <PhoneIcon />
                <span className="ici">+90 538 636 3206</span>
              </a>
            </li>

            <li className="sag">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/kayayapiinsaat_17"
              >
                <InstagramIcon />
                <span>kayayapiinsaat_17</span>
              </a>
            </li>

            <li className="sag">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/CPBNeTykSFdNv9vK9"
              >
                <MapIcon />
                <span>
                  İsmetpaşa, 2. Karanfil Sk. No:19/1, 17000 Çanakkale
                  Merkez/Çanakkale
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr style={{ width: "100%", border: "1px solid #dee0ea" }} />

      <div className="container">
        <p style={{ fontSize: "0.85rem" }}>
          Copyright 2024 © Kaya Yapı İnşaat. Bütün Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
