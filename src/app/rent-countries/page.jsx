import React from 'react';
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";
import './rent-countries.css';
import countriesData from '../../data/countries.json';
import countriesData2 from '../../data/countries-2.json';
import Link from "next/link";

const CountryList = ({ title, description, countries }) => (
  <>
    <div className='bg-count'>
      <div className='count-class'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>

    <div className='bg-count-class'>
      <div className='count'>
        {countries.map((country) => (
          <div key={country.id}>
            <img src={country.image} alt={country.name} />
            <p>{country.name}</p>
            <button><Link href={`/country-details/${country.id}`}>المزيد</Link></button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  </>
);

const Page = () => {
  return (
    <section>
      <Header />
      <CountryList
        title="دول الايجار"
        description="تعرف علي كافه التفاصيل"
        countries={countriesData}
      />
      <CountryList
        title="دول الاستقدام"
        description="تعرف علي كافه التفاصيل"
        countries={countriesData2}
      />
      <Footer />
    </section>
  );
}

export default Page;
