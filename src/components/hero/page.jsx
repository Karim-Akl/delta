import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section>
      <div className=" hero-class">
        <div className="flex img-text-hero">
          <div>
            <img
              src="/image/0812202412550066ba062467188.png"
              alt=""
              width={400}
            />
          </div>
          <div className="text">
            <p>تعرف علينا أكثر</p>
            <h3>من نحن</h3>
            <p>
              شركة دلتا النسيم للاستقدام شركة سعودية مساهمة مغلقة (مقفلة) تأسست
              في عام 2021 م في استقدام العمالة المنزلية في منطقة القصيم بريدة
              بترخيص رقم 74 وقد بدأت بتقديم خدمة الوساطة للاستقدام العمالة
              المنزلية وتسهيل إجراءات الاستقدام ما بين العملاء ووكالات العمل
              الخارجية بإضافة الى هذه الخدمة نقوم بخدمة نقل الخدمات من الشركة
              الى العميل مباشرة ونعمل على تلبية احتياج قطاع الافراد في استقدام
              العمالة المنزلية للعديد من الجنسيات ومختلف المهن لكلا الجنسين وفق
              ما ورد في وزارة العمل والتنمية الاجتماعية ونظل دائما على العمل
              والانجاز السريع وتقديم افضل الخدمات في مجال استقدام العمالة
              والتأجير.
            </p>
          </div>
        </div>
        <div className="flex l3-hero">
          <div className="l1-hero">
            <div>
              <img src="/image/l1.svg" alt="" />
            </div>
            <h2>رؤيتنا</h2>
            <p>
              نسعى في شركة دلتا النسيم للاستقدام لأن نكون الشريك الاستراتيجي
              المفضل لتوفير الكوادر البشرية ذات الكفاءة العالية في المملكة
              العربية السعودية.
            </p>
            <hr className="l3-hr" />
          </div>

          <div className="l1-hero">
            <div>
              <img src="/image/l2.svg" alt="" />
            </div>
            <h2>مهمتنا</h2>
            <p>
              أن نكون الشركة الرائدة في تقديم خدمات العمالة المنزلية من خلال
              التميز في الأداء وتقديم أعلى مستويات الخدمة.تلبية احتياجات
              العملاء: فهم احتياجات عملائنا وتقديم حلول مخصصة تلبي توقعاتهم
              وتفوقها.ابتكار وتحسين: الاستمرار في تحسين خدماتنا وتقديم ابتكارات
              جديدة لضمان تقديم أفضل تجربة لعملائنا
            </p>
            <hr className="l2-hr" />
          </div>
          <div className="l1-hero">
            <div>
              <img src="/image/l3.svg" alt="" />
            </div>
            <h2>احترافية الاداء</h2>
            <p>
              ضمان تقديم خدمات منزلية متميزة تلبي أعلى معايير الجودة
              والاحترافية.رضا العملاء: التركيز على تحقيق رضا العملاء الكامل من
              خلال تلبية احتياجاتهم وتقديم نتائج تفوق توقعاتهم.توفير كوادر بشرية
              ذات كفاءة عالية
            </p>
            <hr />
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
                  <img src="/image/b1.png" alt="" width={250} />
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
                  <img src="/image/b1.png" alt="" width={250} />
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
                  <img src="/image/b1.png" alt="" width={250} />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="flex line-5-bg"> 
        <div>
          <img src="/image/logo.png" alt="" />
        </div>
        <div>
          <p>
            نسعى في شركة أيادي النهار لأن نكون الشريك الاستراتيجي المفضل لتوفير
            الكوادر البشرية ذات الكفاءة العالية في المملكة العربية السعودية
          </p>
          <h3>تحقيق التميز</h3>
          <p>
            ✔ أن نكون الشركة الرائدة في تقديم خدمات العمالة المنزلية من خلال
            التميز في الأداء وتقديم أعلى مستويات الخدمة
          </p>
          <h3>رضا العملاء</h3>
          <p>
            ✔ التركيز على تحقيق رضا العملاء الكامل من خلال تلبية احتياجاتهم
            وتقديم نتائج تفوق توقعاتهم
          </p>
          <h3>انتقاء دقيق</h3>
          <p>
            ✔ استقدام وتوظيف العمالة المنزلية ذات المهارات والخبرات العالية
            لضمان تقديم أفضل الخدمات
          </p>
        </div>
      </div>

      <div className="flex bg-box">
        <div className="box">
          <h2>8</h2>
          <p>دول استقدام
          </p>
          <button>المزيد</button>
        </div>
        <div className="box">
          <h2>8</h2>
          <p>دول استقدام
          </p>
          <button>المزيد</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
