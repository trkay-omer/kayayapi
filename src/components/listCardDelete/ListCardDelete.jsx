import { Link } from "react-router-dom";
import "./ListCardDelete.scss";
import img from "/images/slider/1.jpg";

const ListCardDelete = () => {
    return (
        <div className="projeCardDelete">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="detayCard">
            <div className="desc">
              <div className="title">
                <h3>Proje İsmi</h3>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias, ratione!
                </p>
              </div>
    
              <div className="text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                  neque fuga quia non perferendis nobis commodi rerum nihil corrupti
                  laborum.
                </p>
              </div>
            </div>
            <div className="buttonCard">
              <Link to="/projedetay" target="_blank" rel="noopener noreferrer">
                <button>Projeye Git</button>
              </Link>

              <Link to="/projedetay">
                <button className="delete">Sil</button>
              </Link>

              <Link to="/admin/duzenle">
                <button className="update">Düzenle</button>
              </Link>
            </div>
          </div>
        </div>
      );
}

export default ListCardDelete
