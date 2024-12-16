import { Link } from "react-router-dom";
import "./ListCard.scss";
import img from "/images/slider/1.jpg";

const LİstCard = ({proje}) => {
  return (
    <div className="projeCard">
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
          <Link to={`/projeler/${proje.id}`}>
            <button>Projeye Git</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LİstCard;
