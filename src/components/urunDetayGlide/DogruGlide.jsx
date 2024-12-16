import { useEffect } from "react";
import EnDogruItem from "../enDogruDaireItem/EnDogruItem";
import Glide from "@glidejs/glide";

const DogruGlide = ({ data }) => {
  useEffect(() => {
    const glideDogru = new Glide(".glide-dogru", {
      type: "carousel",
      perView: 4,
      gap: 20,
      breakpoints: {
        1023: {
          perView: 3,
        },

        768: {
          perView: 2,
        },
        350: {
          perView: 1,
        },
      },
    });

    glideDogru.mount();
  }, []);

  return (
    <div className="glide-dogru">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {data.map((data, index) => (
            <EnDogruItem key={index} img={data.img} title={data.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DogruGlide;
