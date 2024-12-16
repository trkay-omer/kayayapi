import KingBedIcon from "@mui/icons-material/KingBed";
import "./Ozellik.scss"

const Ozellik = () => {
  return (
    <div className="ozellikItem">
      <KingBedIcon className="ozellikIconContainer" />

      <div className="ozellikTextContainer">
        <h4>250 m2</h4>
        <p>Total Flat Space</p>
      </div>
    </div>
  );
};

export default Ozellik;
