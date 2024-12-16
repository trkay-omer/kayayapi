
import "./Acardion.scss";

import image2 from "/images/acardion/2.jpg";
import image3 from "/images/acardion/3.png";
import image7 from "/images/acardion/vii.png";


function Acardion() {
  return (
    <div className="acardion-template">
      <ul className="acardion">
        <li>
          <img src={image2} alt="" />
          <div className="content">
            <span>
              <h2>Ömer Türkay</h2>
              <p>CEO</p>
            </span>
          </div>
        </li>

        <li>
          <img src={image3} alt="" />
          <div className="content">
            <span>
              <h2>Rozerin Tanrıkulu</h2>
              <p>Müdür</p>
            </span>
          </div>
        </li>

        <li>
          <img src={image7} alt="" />
          <div className="content">
            <span>
              <h2>Cenk Atlas Türkayoğulları</h2>
              <p>Müdür Yrd.</p>
            </span>
          </div>
        </li>

        

        {/* <li>
          <img src={image4} alt="" />
          <div className="content">
            <span>
              <h2>Zeynep Demirhan</h2>
              <p>Satış Danışmanı</p>
            </span>
          </div>
        </li>

        <li>
          <img src={image5} alt="" />
          <div className="content">
            <span>
              <h2>Gamze Vardar</h2>
              <p>Satış Danışmanı</p>
            </span>
          </div>
        </li> */}
      </ul>
    </div>
  );
}

export default Acardion;
