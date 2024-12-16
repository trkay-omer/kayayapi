import "./Iletisim.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";


const Iletisim = () => {
  return (
    <div className="iletisim">
      <div className="container">
        <div className="content">
          <div className="map">
            <iframe
              className="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.7546028372035!2d26.412202175673123!3d40.14774967196709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a92830f0805b%3A0x2415d941377c71d8!2zS2F5YSBZYXDEsSDEsG7Fn2FhdA!5e0!3m2!1str!2str!4v1733505745666!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="infoIletisim">
            <div className="itemIletisim">
              <h3>Adres Bilgilerimiz</h3>
              <p>
                Güvenevler mh 23 nolu sokak no:35 Sarıkonak Apt. Kat:2 Daire:4
                Şehitkamil/Gaziantep
              </p>
            </div>

            <div className="itemIletisim">
              <h3>Telefon Numaramız</h3>
              <div className="itemList">
                <LocalPhoneIcon />
                <p>+90 539 692 8491</p>
              </div>
            </div>

            <div className="itemIletisim">
              <h3>Medya Hesaplarımız</h3>
              <div className="medyas">
                <div className="itemList">
                  <EmailIcon />
                  <p>kayayapi@gmail.com</p>
                </div>
                <div className="itemList">
                  <InstagramIcon />
                  <p>kayayapi_17</p>
                </div>
                
                
              </div>
            </div>

            <div className="itemIletisim">
              <h3>Mesai Saatlerimiz</h3>
              <div className="medyas">
                <div className="itemList">
                  <h4>Haftaiçi:</h4>
                  <p>08.00 - 19.00</p>
                </div>
                <div className="itemList">
                  <h4>Hafta Sonu:</h4>
                  <p>08.00 - 19.00</p>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
