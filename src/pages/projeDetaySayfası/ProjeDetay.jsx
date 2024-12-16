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
import { useEffect, useState } from "react";
import ProjelerGlide from "../../components/ProjerlerGlide/ProjelerGlide";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjeDetay = () => {
  const {id} = useParams();
  const [proje , setProje] = useState(null);
  const [digerProjeler , setDigerProjeler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/post/get-by-id?id=${id}`);
        const response2 = await axios.get("http://localhost:8080/api/v1/post/small?page=0&size=10");
        setProje(response.data);
        setDigerProjeler(response2.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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

  const [selectedImage, setSelectedImage] = useState("/images/projects/project1/interior-2685517_1280.jpg");

  const handleImageClick = (image) => {
    setSelectedImage(image); // Yeni resmi güncelle
  };

  if ((proje==null || digerProjeler == []) ) {
    return <div>Yükleniyor...</div>;
  }

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
              <h1>{proje.title}</h1>
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
              <InfoCard img={metrekare} value={proje.postDetails.brutMetrekare} tag={"Brüt Metre"} />
              <InfoCard img={Living} value={proje.postDetails.odaSayisi} tag={"Oda Sayısı"} />
              <InfoCard img={radiator} value={proje.postDetails.isitma} tag={"Isıtma"} />
              <InfoCard img={chef} value={proje.postDetails.mutfakTipi ? "Açık" : "Kapalı"} tag={"Mutfak Tipi"} />
              <InfoCard img={parking} value={proje.postDetails.otopark ? "Var" : "Yok"} tag={"Otopark"} />
              <InfoCard
                img={pool}
                value={proje.postDetails.havuz ? "var" : "Yok"}
                tag={"Havuz"}
              />
              <InfoCard img={playground} value={proje.postDetails.oyunPark ? "Var" : "Yok"} tag={"Oyun Parkı"} />
              <InfoCard
                img={security}
                value={proje.postDetails.güvenlik ? "Var" : "Yok"}
                tag={"Güvenlik"}
              />
              <InfoCard img={footballField} value={proje.postDetails.sporSalon ? "Var" : "Yok"} tag={"Spor Sahaları"} />
            </div>
          </div>

          <div className="projectDetay">
            <h3>Proje Detayları</h3>
            <div className="desc">
              <p>
              {proje.postDetails.context1}
              </p>
              <p>
              {proje.postDetails.context2}
              </p>
              <p>
              {proje.postDetails.context3}
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
                projeler={digerProjeler}
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
