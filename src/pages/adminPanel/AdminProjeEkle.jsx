import { useState } from "react";
import "./AdminProjeEkle.scss";
import axios from "axios";

const AdminProjeEkle = () => {
  const token = localStorage.getItem('authToken');
  const [images, setImages] = useState([]);

  // Resim Yükleme
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  // Resim Silme
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const [formData, setFormData] = useState({
    type: "house",
    sehir: "",
    ilce: "",
    title: "",
    content: "",
    price: "",
    brutMetrekare: "",
    isitma: "",
    odaSayisi: "",
    mutfakTipi: false,
    otopark: false,
    havuz: false,
    oyunPark: false,
    güvenlik: false,
    sporSalon: false,
    context1: "",
    context2: "",
    context3: "",

  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/post', formData, {
        headers: {
          Authorization:`Bearer ${token}`, // Authorization header'ı ekleyin
        },
      });
  
      console.log('Başarılı:', response.data);
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className="projeList">
      <div className="title">
        <h4>Proje Ekle</h4>
        <hr />
      </div>

      <div className="projeEkle">
        <form onSubmit={handleSubmit}>
          <div className="uploader-container">
            <div style={{display:"flex", justifyContent:"space-between", marginBottom:"2rem"}} className="baslikAndButton">
            <h4>Proje Resimleri Yükle</h4>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="upload-input"
              id="file-input"
            />

            <div>
              <label
                htmlFor="file-input"
                style={{
                  cursor: "pointer",
                  display: "inline-block",
                  padding: "10px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                {images.length > 0
                  ? `Resim Ekle: ${images.length}`
                  : "Resim Seç"}
              </label>
            </div>
            </div>
           

            <div className="images-preview-container">
              {images.map((image, index) => (
                <div key={index} className="image-container">
                  <img src={image} alt={`Uploaded Preview ${index}`} />
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveImage(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label>
              Proje İsmi:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Proje Tipi:
              <select name="varlıkTypeDisabled" value={"house"} disabled>
                <option value="house">Konut</option>
                <option value="land">Arsa</option>
              </select>
              <input type="hidden" name="type" value="house" />
            </label>
          </div>

          <div>
            <label>
              Oda Sayısı:
              <select
                name="odaSayisi"
                value={formData.odaSayisi}
                onChange={handleChange}
                required
              >
                <option value="1+1">1+1</option>
                <option value="2+1">2+1</option>
                <option value="3+1">3+1</option>
                <option value="4+1">4+1</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Brüt m²:
              <input
                type="text"
                name="brutMetrekare"
                value={formData.brutMetrekare}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Isıtma:
              <input
                type="text"
                name="isitma"
                value={formData.isitma}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Kapalı Mutfak:
              <input
                type="checkbox"
                name="mutfakTipi"
                checked={formData.mutfakTipi}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Otopark:
              <input
                type="checkbox"
                name="otopark"
                checked={formData.otopark}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Havuz:
              <input
                type="checkbox"
                name="havuz"
                checked={formData.havuz}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Oyun Parkı:
              <input
                type="checkbox"
                name="oyunPark"
                checked={formData.oyunPark}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Güvenlik:
              <input
                type="checkbox"
                name="güvenlik"
                checked={formData.güvenlik}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Spor Alanları:
              <input
                type="checkbox"
                name="sporSalon"
                checked={formData.sporSalon}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Açıklama 1:
              <textarea
                name="context1"
                value={formData.context1}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Açıklama 2:
              <textarea
                name="context2"
                value={formData.context2}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Açıklama 3:
              <textarea
                name="context3"
                value={formData.context3}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="buttonContainer">
            <button type="submit">Proje Ekle</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminProjeEkle;
