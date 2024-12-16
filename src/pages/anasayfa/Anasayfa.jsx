import "./Anasayfa.scss";
import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";

import img1 from "/images/slider/1.jpg";
import img2 from "/images/slider/2.jpg";
import img3 from "/images/slider/3.jpg";

import project1 from "/images/projects/project1/featured.jpg";
import Ozellik from "../../components/Anasayfa/ozellik/Ozellik";
import Baslik from "./../../components/baslik/Baslik";
import Acardion from "../../components/acardion/Acardion";
import ProjelerGlide from "../../components/ProjerlerGlide/ProjelerGlide";

const Anasayfa = () => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 1,
      focusAt: "center",
      // autoplay: 4000,
    });

    glide.mount();
  }, []);

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

  return (
    <div className="anasayfa">
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <img src={img1} alt="Slide 1" />
              <div className="container">
                <div className="bannerText">
                  <div className="location">
                    <h3>
                      Çanakkale <span>Kepez</span>
                    </h3>
                  </div>
                  <div className="title">
                    <h1>İyi yaşam herkesin hakkı</h1>
                  </div>
                </div>
              </div>
              <div className="background"></div>
            </li>
            <li className="glide__slide">
              <img src={img2} alt="Slide 1" />
              <div className="container">
                <div className="bannerText">
                  <div className="location">
                    <h3>
                      Çanakkale <span>Kepez</span>
                    </h3>
                  </div>
                  <div className="title">
                    <h1>Bir yapı&apos;dan daha fazlası</h1>
                  </div>
                </div>
              </div>
              <div className="background"></div>
            </li>
            <li className="glide__slide">
              <img src={img3} alt="Slide 1" />
              <div className="container">
                <div className="bannerText">
                  <div className="location">
                    <h3>
                      Çanakkale <span>Kepez</span>
                    </h3>
                  </div>
                  <div className="title">
                    <h1>İşin hakkını veriyoruz</h1>
                  </div>
                </div>
              </div>
              <div className="background"></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="anaProject">
        <div className="container">
          <div className="populerProject">
            <div className="mobileTitle">
              <h3 style={{ fontSize: "1.5rem" }}>Ana Projemiz</h3>
            </div>
            <div className="subDetay">
              <div className="imgContainer">
                <img src={project1} alt="" />
              </div>
              <div className="textContainer">
                <h3 className="projectName">| Featured</h3>
                <h1>Best Appartment & Sea view</h1>

                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  praesentium a sit hic sunt! Dolorum repudiandae iste
                  reiciendis, adipisci quae enim inventore a dignissimos eos
                  vitae, libero minima assumenda iusto!
                </p>
                <div className="button">
                  <button>Projeye Git</button>
                </div>
              </div>
            </div>

            <div className="prts">
              <Ozellik />
              <Ozellik />
              <Ozellik />
              <Ozellik />
            </div>
          </div>
        </div>
      </div>

      <div className="fullImg">
        <div className="container">
          <div className="fullImgContent">
            <Baslik
              title={"Tüm Projelerimizi Görün"}
              desc={"Her şey sizler için"}
            />
            <button className="btn-fullImg">Projeye Git</button>
          </div>
        </div>
      </div>

      <div className="bestTeam">
        <div className="container">
          <div className="content">
            <div className="left">
              <Baslik
                title="Projelerimiz"
                desc="Sizler için en iyisini yapıyoruz"
              />
            </div>
            <hr />
            <div className="TeamlistCards">
              <ProjelerGlide
                key={window.location.pathname}
                perView={3}
                projeler={projeler}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="whoUsing">
        <div className="container">
          <div className="content">
            <Acardion />
            <div className="left">
              <Baslik title={"İyi iş iyi ekipten çıkar"} desc={"Kemik Kadro"} />

              <p>
                Ekip dedik ve burada olmayan 100&apos;den fazla emekçimize
                ayrıca teşekkür etmeden geçemiyoruz. Onlara sizler kadar
                minnettarız...
              </p>
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
                    {openIndex === index ? "" : "+"}
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

export default Anasayfa;
