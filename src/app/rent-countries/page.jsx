import React from "react";
import Link from "next/link";
import Contact from "../../components/contact/page";
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";
import Image from "next/image";
import "../../components/hero/hero.css";
import "./rent-countries.css";

const Page = () => {
  const handleContactClick = () => {
    console.log("Contact button clicked");
    // Add your desired behavior here
  };

  return (
    <section className="sec-serv">
      <Header />
      <div className="backServices">
        <h3>شركة دلتا النسيم</h3>
        <p>خدمات معتمدة</p>
      </div>

      <div className="flex line-3-bg">
        <div className="imga" style={{ width: "50%" }}>
          <h2>نحن نقدم عروض مغرية</h2>
          <p>
            تقديم أسعار تنافسية مع الحفاظ على جودة الخدمة، مما يجعل خدماتنا في
            متناول الجميع. شفافية الأسعار: وضوح وتفصيل الأسعار بدون أي رسوم خفية،
            مما يعزز من ثقة العملاء. سلامة وأمان
          </p>
          <button><Link href="/our-services"></Link>توصل معنا</button>
        </div>
        <div className="imga" style={{ width: "30%" }}>
          <Image
            src="/image/pexels-tima-miroshnichenko-6200780.jpg"
            alt="عروض مغرية"
            width={200}
            height={200}
            priority
          />
        </div>
      </div>

      <div className="class-bg">
        <div className="service-container">
          <h2>خدماتنا</h2>
          <p>خبراء في مجالنا لذلك يمكننا توفير خدمات مميزة لك</p>
          <div className="flex">
            {[
              {
                title: "إيجار العاملات",
                description:
                  "تقديم خدمات إيجار العمالة المنزلية مع مرونة في العقود والأسعار التنافسية تأمين العمالة المنزلية من البلدان المصرح بها، مع ضمان التزامهم بأعلى معايير الجودة",
                imgSrc: "/image/0821202411020566c5c92d7be51.gif",
                altText: "إيجار العاملات",
              },
              {
                title: "تنظيف شامل",
                description:
                  "تنظيف المنازل والمكاتب بأساليب احترافية لضمان بيئة نظيفة وصحية",
                imgSrc: "/image/0821202411031766c5c975cc7b2.gif",
                altText: "تنظيف شامل",
              },
              {
                title: "رعاية منزلية",
                description:
                  "توفير الرعاية للمسنين والأطفال بأعلى مستوى من الاهتمام والعناية. نهدف إلى جعل حياتكم أسهل وأكثر راحة من خلال خدماتنا المتكاملة والمخصصة لتلبية جميع احتياجاتكم المنزلية.",
                imgSrc: "/image/0821202411045566c5c9d744f0e.gif",
                altText: "رعاية منزلية",
              },
            ].map(({ title, description, imgSrc, altText }, index) => (
              <div key={index} className="l1-class-bg">
                <div className="service-text">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="service-image">
                  <Image
                    src={imgSrc}
                    alt={altText}
                    width={250}
                    height={250}
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </section>
  );
};

export default Page;
