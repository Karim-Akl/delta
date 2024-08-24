"use client";
import React from "react";
import Contact from "../../components/contact/page"
import "./ourservices.css";
const Page = () => {
  return (
    <section className="sec-serv">

    <div>
        <div className="backServices">
          <h3>شركه دلتا النسيم</h3>
          <p>خدمات معتمده </p>
        </div></div>

        <div>
        <div className="flex line-3-bg">
        <div style={{ width: "50%" }} className="imga">
          <h2>نحن نقدم عروض مغرية</h2>
          <p>
            تقديم أسعار تنافسية مع الحفاظ على جودة الخدمة، مما يجعل خدماتنا في
            متناول الجميع.شفافية الأسعار: وضوح وتفصيل الأسعار بدون أي رسوم خفية،
            مما يعزز من ثقة العملاء.سلامة وأمان
          </p>
          <button>توصل معنا</button>
        </div>
        <div style={{ width: "30%" }} className="imga">
          <img src="/image/b4.jpeg" alt="" width={200} />
        </div>
      </div>
        </div>


        <div className="class-bg ">
        <div style={{ width: "80%", margin: "auto", gap: "0px" }}>
          <div
            style={{
              width: "100%",
              marginTop: "5rem",
              justifyContent: "center",
              color: "white",
            }}
          >
            <h2>خدماتنا</h2>
            <p>خبراء فى مجالنا لذلك يمكننا توفير خدمات مميزة لك</p>
          </div>
          <div className="flex">
            <div
              className="l1-class-bg"
              style={{
                display: "flex",
                height: "30rem",

                justifyContent: "",
                gap: "1rem",
                flexDirection: "column-reverse",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "",
                  gap: "1rem",

                  flexDirection: "column",
                }}
              >
                <h2>إيجار العاملات</h2>
                <p>
                  تقديم خدمات إيجار العمالة المنزلية مع مرونة في العقود والأسعار
                  التنافسية تأمين العمالة المنزلية من البلدان المصرح بها، مع
                  ضمان التزامهم بأعلى معايير الجودة
                </p>{" "}
              </div>
              <div>
                <div>
                  <img src="/image/m2.jpg" alt="" width={250} />
                  <p></p>
                </div>
              </div>
            </div>
            <div
              className="l1-class-bg"
              style={{
                display: "flex",
                justifyContent: "",
                gap: "1rem",
                height: "30rem",

                flexDirection: "column-reverse",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "",
                  gap: "1rem",
                  flexDirection: "column",
                }}
              >
                <h2> تنظيف شامل</h2>
                <p>
                  تنظيف المنازل والمكاتب بأساليب احترافية لضمان بيئة نظيفة وصحية
                </p>{" "}
              </div>
              <div>
                <div>
                  <img src="/image/m1.jpg" alt="" width={250} />
                  <p></p>
                </div>
              </div>
            </div>
            <div
              className="l1-class-bg"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexDirection: "column-reverse",
                height: "30rem",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  flexDirection: "column",
                }}
              >
                <h2> رعاية منزلية</h2>
                <p>
                  توفير الرعاية للمسنين والأطفال بأعلى مستوى من الاهتمام
                  والعناية.نهدف إلى جعل حياتكم أسهل وأكثر راحة من خلال خدماتنا
                  المتكاملة والمخصصة لتلبية جميع احتياجاتكم المنزلية.
                </p>{" "}
              </div>
              <div>
                <div>
                  <img src="/image/pexels-tima-miroshnichenko-6200780.jpg" alt="" width={250} />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Contact/> */}
    </section>
  );
};

export default Page;
