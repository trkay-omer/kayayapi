import { useEffect } from "react";
import TeamListCard from "../Anasayfa/teamListCard/TeamListCard";
import "./ProjelerGlide.scss";
import Glide from "@glidejs/glide";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


const ProjelerGlide = ({ projeler, perView }) => {
  
  useEffect(() => {
    const glideDiger = new Glide(".glideDiger", {
      type: "carousel",
      gap: 20,
      perView: perView,
      breakpoints: {
        1024: {
          perView: 3,
        },

        780: {
          perView: 2,
        },
        500: {
          perView: 1,
        },
      },
    });

    glideDiger.mount();

    
  }, []);

  return (
    <div className="glideDiger">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {projeler.map((proje, index) => (
            <TeamListCard key={index} proje={proje} />
          ))}
        </ul>
      </div>

      <div className="glide__arrows" data-glide-el="controls">
        <button
          style={{ right: "-60px" }}
          className="glide__arrow glide__arrow--right"
          data-glide-dir=">"
        >
          <ChevronRightIcon className="icon" />
        </button>
      </div>
    </div>
  );
};

export default ProjelerGlide;
