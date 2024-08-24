import React from 'react';
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";
import './rent-countries.css';
import countriesData from '../../data/countries.json';
import countriesData2 from '../../data/countries-2.json';
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <Header />
      <div className='bg-count'>
        <div className='count-class'>
          <h2>دول الايجار</h2>
          <p>تعرف علي كافه التفاصيل</p>
        </div>
      </div>

      <div className='bg-count-class'>
        <div className='count'>
          {countriesData.map((country) => (
            <div key={country.id}>
              <img src={country.image} alt={country.name} />
              <p>{country.name}</p>
              <button><Link href={`/country-details/${country.id}`}>المزيد</Link></button>
              <hr />
            </div>
          ))}
        </div>
      </div>

      <div className='bg-count'>
        <div className='count-class'>
          <h2>دول الاستقدام</h2>
          <p>تعرف علي كافه التفاصيل</p>
        </div>
      </div>

      <div className='bg-count-class'>
        <div className='count'>
          {countriesData2.map((country) => (
            <div key={country.id}>
              <img src={country.image} alt={country.name} />
              <p>{country.name}</p>
              <button><Link href={`/country-details/${country.id}`}>المزيد</Link></button>
              <hr />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Page;
