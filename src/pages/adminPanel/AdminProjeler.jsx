import "./AdminProjeler.scss";
import ListCardDelete from "../../components/listCardDelete/ListCardDelete";
import { useEffect, useState } from "react";
import axios from "axios";
const AdminProjeSil = () => {
  const [projeler, setProjeler] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/post/small?page=0&size=10');
        console.log('Data:', response.data); // Çekilen veriler burada
        setProjeler(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="projeList">
      <div className="title">
        <h4>Projeler</h4>
        <hr />
      </div>

      <div className="list">
        {projeler.map((proje, index) => (
          <ListCardDelete key={index} proje={proje} />
        ))}
      </div>
    </div>
  );
};

export default AdminProjeSil;
