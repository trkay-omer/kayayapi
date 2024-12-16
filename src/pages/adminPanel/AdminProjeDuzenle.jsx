import { useState } from "react";
import "./AdminProjeDuzenle.scss";

const AdminProjeDuzenle = () => {
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
    projectName: "",
    varlıkType: "house",
    grossArea: "",
    heating: "",
    kitchenType: false,
    parking: false,
    pool: false,
    playground: false,
    security: false,
    sportsAreas: false,
    description1: "",
    description2: "",
    description3: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Proje Bilgileri:", formData);
    console.log(images);
  };

  return (
    <div className="projeList">
      <div className="title">
        <h4>Proje Düzenle</h4>
        <hr />
      </div>

      <div className="projeDuzenle">
        <form onSubmit={handleSubmit}>
        <div className="uploader-container">
            <div style={{display:"flex", justifyContent:"space-between"}} className="baslikAndButton">
            <h4>Proje Resimlerini Düzenle</h4>
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
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Proje Tipi:
              <select name="varlıkTypeDisabled" value="house" disabled>
                <option value="house">Konut</option>
                <option value="land">Arsa</option>
              </select>
              <input type="hidden" name="varlıkType" value="house" />
            </label>
          </div>

          <div>
            <label>
              Oda Sayısı:
              <select
                name="roomCount"
                value={formData.roomCount}
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
                name="grossArea"
                value={formData.grossArea}
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
                name="heating"
                value={formData.heating}
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
                name="kitchenType"
                checked={formData.kitchenType}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Otopark:
              <input
                type="checkbox"
                name="parking"
                checked={formData.parking}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Havuz:
              <input
                type="checkbox"
                name="pool"
                checked={formData.pool}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Oyun Parkı:
              <input
                type="checkbox"
                name="playground"
                checked={formData.playground}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Güvenlik:
              <input
                type="checkbox"
                name="security"
                checked={formData.security}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Spor Alanları:
              <input
                type="checkbox"
                name="sportsAreas"
                checked={formData.sportsAreas}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Açıklama 1:
              <textarea
                name="description1"
                value={formData.description1}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Açıklama 2:
              <textarea
                name="description2"
                value={formData.description2}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Açıklama 3:
              <textarea
                name="description3"
                value={formData.description3}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="buttonContainer">
            <button type="submit">Düzenle</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminProjeDuzenle;
