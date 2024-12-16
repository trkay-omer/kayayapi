import  { useEffect, useState } from "react";
import "./MrGlide.scss";

import Glide from "@glidejs/glide";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import img1 from "/images/projects/project1/interior-2685517_1280.jpg";
import img2 from "/images/projects/project1/interior-2685518_1280.jpg";
import img3 from "/images/projects/project1/interior-2685521_1280.jpg";
import img4 from "/images/projects/project1/interior-2685522_1280.jpg";

const MrGlide = ({ onImageClick }) => {

  const images = [img1, img2, img3, img4];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    onImageClick(images[index]); // Parent component'e seçilen resmi gönder
  };

  useEffect(() => {
    new Glide(".glideResim", {
      type: "slider",
      startAt: 0,
      perView: 4,
      breakpoints: {
        // 935: {
        //   perView: 2, // Ekran genişliği 768 pikselden küçükse 2 öğe göster
        // },
        // 540: { perView: 1 },
      },
    }).mount();
  }, []);

  return (
    <div className="glideResim">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
        {images.map((image, index) => (
            <li
              key={index}
              className={`glide__slide ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleImageClick(index)}
              style={{
                cursor: "pointer",
                border: index === activeIndex ? "2px solid black" : "none",
              }}
            >
              <img src={image} alt={`slide-${index}`} />
            </li>
          ))}
        </ul>
      </div>

      <div className="glide__arrows" data-glide-el="controls">
        <button
          style={{
            border: "none",
            fontSize: "10px",
            backgroundColor: "none",
            top: "45%",
            borderRadius: "30%",
            height: "70px",
            color: "black",
            boxShadow: "none",
            textShadow: "none",
            left: "-50px",
          }}
          className="glide__arrow glide__arrow--left"
          data-glide-dir="<"
        >
          <ChevronLeftIcon
            sx={{
              fontSize: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </button>
        <button
          style={{
            border: "none",
            fontSize: "10px",
            backgroundColor: "none",
            borderRadius: "30%",
            top: "45%",
            height: "70px",
            color: "black",
            right: "-50px",
            boxShadow: "none",
            textShadow: "none",
          }}
          className="glide__arrow glide__arrow--right"
          data-glide-dir=">"
        >
          <ChevronRightIcon
            sx={{
              fontSize: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default MrGlide;
