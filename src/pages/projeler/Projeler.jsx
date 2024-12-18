import { Link } from "react-router-dom";
import "./Projeler.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import LİstCard from "../../components/listCard/LİstCard";
import { useEffect, useState } from "react";
import axios from "axios";
import FilterListIcon from '@mui/icons-material/FilterList'; // Filtre ikonunu ekliyoruz


const Projeler = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [projeler, setProjeler] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/post/small?page=0&size=10');
        console.log('Data:', response.data); // Çekilen veriler burada
        const data = response.data
        setProjeler(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Sidebar'ı açma ve kapama işlemi
  };

  return (
    <div className="projeler">
      <div className="container">
        <div className="contentProjeler">


          <sidebar className={`sidebar ${sidebarOpen ? "open" : ""}`}>
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
              <div style={{display:"flex", gap:"2rem", justifyContent:"space-between", alignItems:"center"}}>
                <h4>Projeler</h4>
                <div className="filterIcon" onClick={toggleSidebar}>
                  <FilterListIcon style={{ fontSize: "1.2rem", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }} />
                </div>
              </div>
              <hr />
            </div>
            <div className="list">
              {projeler.map((proje, index) => (
                <LİstCard key={index} proje={proje} />
              ))}



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projeler;
