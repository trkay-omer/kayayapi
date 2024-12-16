import { Link } from "react-router-dom";
import "./Projeler.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import LİstCard from "../../components/listCard/LİstCard";
const Projeler = () => {
  return (
    <div className="projeler">
      <div className="container">
        <div className="contentProjeler">
          <sidebar className="sidebar">
            <div className="categories">
              <div className="title">
                <h4>Filtreleme</h4>
                <hr />
              </div>
              <div className="listCategories">
                <ul>
                  <li>
                    <Link to="/projeler">
                      <span>1+1 - Dairelerimiz</span>
                      <ChevronRightOutlinedIcon
                        style={{ fontSize: "1.2rem" }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/projeler">
                      <span>2+1 - Dairelerimiz</span>
                      <ChevronRightOutlinedIcon
                        style={{ fontSize: "1.2rem" }}
                      />
                    </Link>
                  </li>

                  <li>
                    <Link to="/projeler">
                      <span>3+1 - Dairelerimiz</span>
                      <ChevronRightOutlinedIcon
                        style={{ fontSize: "1.2rem" }}
                      />
                    </Link>
                  </li>
                  
                 
                </ul>
              </div>
            </div>
          </sidebar>

          <div className="projeList">
            <div className="title">
              <h4>Kategoriler</h4>
              <hr />
            </div>
            <div className="list">
                <LİstCard/>
                <LİstCard/>
                <LİstCard/>
                <LİstCard/>
                <LİstCard/>
                <LİstCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projeler;
