
"use client";
import React from 'react';
import Header from "../../components/header/page"
import Footer from "../../components/footer/page"
import './rent-countries.css';
const Page = () => {
  return (
    <section>
<Header/>
    <div className='bg-count'>
      <div className='count-class'>
        <h2>دول الاستقدام</h2>
        <p>تعرف علي كافه التفاصيل </p>
      </div>
    </div>

    <div className='bg-count-class'>
      <div className='count'>
              <div>
                <img src="/image/count1.png" alt="" />
                <p>اندونيسيا</p>
                <button>المزيد </button>
                <hr />
              </div>
              <div>
                <img src="/image/count1.png" alt="" />
                <p>بروندي </p>
                <button>المزيد</button>
                <hr />
              </div>
              <div>
                <img src="/image/count1.png" alt="" />
                <p>كينيا</p>
                <button>المزيد</button>
                <hr />
              </div>
              <div>
                <img src="/image/count1.png" alt="" />
                <p>اوغندا</p>
                <button>المزيد</button>
                <hr />
              </div>
      </div>
      <div className='count'>
              <div>
                <img src="/image/count1.png" alt="" />
                <p>اندونيسيا</p>
                <button>المزيد </button>
                <hr />
              </div>
              <div>
                <img src="/image/count1.png" alt="" />
                <p>بروندي </p>
                <button>المزيد</button>
                <hr />
              </div>
              <div>
                <img src="/image/count1.png" alt="" />
                <p>كينيا</p>
                <button>المزيد</button>
                <hr />
              </div>
              <div>
                <img src="/image/count1.png" alt=""  />
                <p>اوغندا</p>
                <button>المزيد</button>
                <hr />
              </div>
      </div>
    </div>
    <Footer/>
    </section>


  );
}

export default Page;
