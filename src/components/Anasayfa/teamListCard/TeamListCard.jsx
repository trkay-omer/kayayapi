import "./TeamListCard.scss";
function TeamlisCard({ proje }) {
  return (
    <li className="glide__slide">
      <div className="card">
        <div className="img">
          <img src={proje.img} alt="" />
        </div>

        <div className="cardSection">
          <div className="CardTop">
            <h4 className="title">{proje.title}</h4>
            <p className="desc">{proje.lokasyon}</p>
          </div>
          <div className="CardBottom">
            <h4 className="price">{proje.price}</h4>
            <button className="btn-card">Projeye Git</button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TeamlisCard;
