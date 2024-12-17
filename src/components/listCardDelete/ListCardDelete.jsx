import { Link } from "react-router-dom";
import "./ListCardDelete.scss";
import img from "/images/slider/1.jpg";

const ListCardDelete = ({proje}) => {
    return (
        <div className="projeCardDelete">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="detayCard">
            <div className="desc">
              <div className="title">
                <h3>{proje.title}</h3>
              </div>
              <div className="text">
                <p>
                  {proje.content}
                </p>
              </div>
    
              
            </div>
            <div className="buttonCard">
              <Link to={`/projeler/${proje.id}`} target="_blank" rel="noopener noreferrer">
                <button>Projeye Git</button>
              </Link>

              <Link to="/projedetay">
                <button className="delete">Sil</button>
              </Link>

              <Link to={`/admin/projeler/${proje.id}`}>
                <button className="update">Düzenle</button>
              </Link>
            </div>
          </div>
        </div>
      );
}

export default ListCardDelete
