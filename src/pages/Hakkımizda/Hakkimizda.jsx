import "./Hakkimizda.scss";
import img from "/images/hakkimizda/pexels-500photos-com-15338-93400.jpg";

import img3 from "/images/hakkimizda/45.jpg";

const Hakkimizda = () => {
  return (
    <div className="hakkimizda">
      <div className="projectName">
        <img src={img} alt="" />
        <div className="container">
          <div className="bannerText">
            <div className="title">
              <h1>Biz Kimiz</h1>
            </div>
          </div>
        </div>

        <div className="background"></div>
      </div>

      <div className="section">
        <div className="container">
          <div className="content">
          <div className="img">
                <img src={img3} alt="" />
            </div>

            <div className="detay">
              <h3>Misyonumuz</h3>
              <div className="desc">
                <p>
                  Mengo Arsa ve Gayrimenkul, sektördeki deneyimi ve güvenilir
                  hizmet anlayışıyla, arsa ve gayrimenkul alanında lider
                  firmalardan biridir.
                </p>
                <p>
                  Müşterilerimize değerli yatırım fırsatları sunarak, kaliteli
                  projeler geliştirmeyi amaçlıyoruz. Sadece bugüne değil,
                  geleceğe de yatırım yaparak sürdürülebilir projeler üretmeyi
                  hedefliyoruz.
                </p>

                <p>
                  Müşterilerimize değerli yatırım fırsatları sunarak, kaliteli
                  projeler geliştirmeyi amaçlıyoruz. Sadece bugüne değil,
                  geleceğe de yatırım yaparak sürdürülebilir projeler üretmeyi
                  hedefliyoruz.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Hakkimizda;
