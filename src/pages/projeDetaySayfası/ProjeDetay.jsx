import InfoCard from "../../components/infoCard/infoCard";
import MrGlide from "../../components/urunDetayGlide/MrGlide";
import "./ProjeDetay.scss";
import img from "/images/projects/project1/interior-2685517_1280.jpg";

import metrekare from "/images/detayProjectItems/plans.png";
import Living from "/images/detayProjectItems/living.png";
import radiator from "/images/detayProjectItems/radiator.png";
import chef from "/images/detayProjectItems/chef.png";
import parking from "/images/detayProjectItems/parking.png";
import playground from "/images/detayProjectItems/playground.png";
import footballField from "/images/detayProjectItems/football-field.png";
import security from "/images/detayProjectItems/policeman.png";
import pool from "/images/detayProjectItems/swimming-pool.png";

import Baslik from "../../components/baslik/Baslik";
import DogruGlide from "../../components/urunDetayGlide/DogruGlide";
import { useState } from "react";
import ProjelerGlide from "../../components/ProjerlerGlide/ProjelerGlide";

const ProjeDetay = () => {
  const faqs = [
    {
      question: "Satın almış olduğum ürünler garantili mi?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dolores.",
    },
    {
      question: "Profesyonel ölçü nasıl alınır?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Yanlış ölçü verildiği durumlarda süreç nasıl işliyor?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Gerekli yıkama talimatları nelerdir?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    { img: "/images/dogruDaire/huzur.jpg", title: "Altyapı ve Huzur" },
    { img: "/images/dogruDaire/konum.jpg", title: "Lokasyon" },
    { img: "/images/dogruDaire/pazar.jpg", title: "Çevresel Olanaklar" },
    { img: "/images/dogruDaire/yatirim.jpg", title: "Gelecek Değeri" },
  ];

  const projeler = [
    {
      img: "/images/projects/bestTeam/1.jpg",
      title: "React, Next.js, Tailwind CSS, Redux, Redux",
      lokasyon: "Çanakkale Merkez",
      price: "3.500.000₺",
    },
    {
      img: "/images/projects/bestTeam/3.jpg",
      title: "React, Next.js, Tailwind CSS, Redux, Redux",
      lokasyon: "Çanakkale Merkez",
      price: "3.500.000₺",
    },
    {
      img: "/images/projects/bestTeam/2.jpg",
      title: "React, Next.js, Tailwind CSS, Redux, Redux",
      lokasyon: "Çanakkale Merkez",
      price: "3.500.000₺",
    },
    {
      img: "/images/projects/bestTeam/4.jpg",
      title: "React, Next.js, Tailwind CSS, Redux, Redux",
      lokasyon: "Çanakkale Merkez",
      price: "3.500.000₺",
    },
  ];

  const [selectedImage, setSelectedImage] = useState("/images/projects/project1/interior-2685517_1280.jpg");

  const handleImageClick = (image) => {
    setSelectedImage(image); // Yeni resmi güncelle
  };

  return (
    <div className="projeDetay">
      <div className="projectName">
        <img src={img} alt="" />
        <div className="container">
          <div className="bannerText">
            <div className="location">
              <h3>
                Çanakkale <span>kepez</span>
              </h3>
            </div>
            <div className="title">
              <h1>Proje İsmi Buraya Gelecek</h1>
            </div>
          </div>
        </div>

        <div className="background"></div>
      </div>

      <div className="container">
        <div className="mainTop">
          <div className="mainSectionSide">
            <div className="product-gallery">
              <div className="single-img">
              <img src={selectedImage} alt="Selected Product" />
              </div>
              <div className="product-thump">
                <MrGlide onImageClick={handleImageClick}/>
              </div>
            </div>

            <div className="detays">
              <InfoCard img={metrekare} value={"144 m²"} tag={"Brüt Metre"} />
              <InfoCard img={Living} value={"3+1"} tag={"Oda Sayısı"} />
              <InfoCard img={radiator} value={"Yerden Isıtma"} tag={"Isıtma"} />
              <InfoCard img={chef} value={"Kapalı"} tag={"Mutfak Tipi"} />
              <InfoCard img={parking} value={"Var"} tag={"Otopark"} />
              <InfoCard
                img={pool}
                value={"Var"}
                tag={"Havuz"}
              />
              <InfoCard img={playground} value={"Var"} tag={"Oyun Parkı"} />
              <InfoCard
                img={security}
                value={"Var"}
                tag={"Güvenlik"}
              />
              <InfoCard img={footballField} value={"Var"} tag={"Spor Sahaları"} />
            </div>
          </div>

          <div className="projectDetay">
            <h3>Bu projede aslen</h3>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                sit magni reprehenderit! Repudiandae maxime officiis, voluptate
                id vitae aspernatur veniam modi! Error repellat facilis quidem
                animi. Suscipit asperiores ipsa dolor!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                laudantium modi nisi explicabo aut reiciendis excepturi quas
                veritatis nam possimus, officia vero repellat assumenda, eius
                tempore minima? Accusamus at provident iste quis nam, blanditiis
                dolores! Id natus quasi possimus voluptates, iste assumenda
                ipsum totam consectetur expedita nobis qui debitis optio!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                laudantium modi nisi explicabo aut reiciendis excepturi quas
                veritatis nam possimus, officia vero repellat assumenda, eius
                tempore minima? Accusamus at provident iste quis nam, blanditiis
                dolores! Id natus quasi possimus voluptates, iste assumenda
                ipsum totam consectetur expedita nobis qui debitis optio!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dogruPerde">
        <div className="container">
          <div className="content">
            <div className="dogruPerdeTitle">
              <Baslik
                title={"Doğru Daire Nasıl Seçilir"}
                desc={
                  "Ufak bir yönlendirme ile en doğru daireyi beraber seçelim"
                }
              />
            </div>
            <DogruGlide data={data} />
          </div>
        </div>
      </div>

      <div className="digerProjeler">
        <div className="container">
          <div className="content">
            <div className="left">
              <Baslik
                title="Diğer Projelerimiz"
                desc="Sizler için listeledik"
              />
            </div>
            <div className="projects">
              <ProjelerGlide
                key={window.location.pathname}
                perView={4}
                projeler={projeler}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sikcaSorulan">
          <h3 className="acardionTitle">Sıkça Sorulan Sorular</h3>
          <div className="acardions">
            {faqs.map((faq, index) => (
              <div
                className={`acardion ${openIndex === index ? "active" : ""}`}
                key={index}
              >
                <div
                  className="acardionSummary"
                  onClick={() => toggleAccordion(index)}
                >
                  <p>{faq.question}</p>
                  <span className="expandIcon">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                <div
                  className="acardionDetails"
                  style={{ display: openIndex === index ? "block" : "none" }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjeDetay;
