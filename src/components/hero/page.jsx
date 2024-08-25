"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./hero.css";

const Hero = () => {
  const [recruitmentCount, setRecruitmentCount] = useState(0);
  const [rentalCount, setRentalCount] = useState(0);

  // Increment the count for recruitment countries from 0 to 20
  useEffect(() => {
    const startCount = 0;
    const endCountRecruitment = 20;
    const endCountRental = 8;
    const duration = 3000;

    const incrementTimeRecruitment = duration / (endCountRecruitment - startCount);
    const incrementTimeRental = duration / (endCountRental - startCount);
  
    const incrementRecruitmentCount = () => {
      setRecruitmentCount((prevCount) => {
        if (prevCount < endCountRecruitment) {
          setTimeout(incrementRecruitmentCount, incrementTimeRecruitment);
          return prevCount + 1;
        } else {
          return endCountRecruitment;
        }
      });
    };

    const incrementRentalCount = () => {
      setRentalCount((prevCount) => {
        if (prevCount < endCountRental) {
          setTimeout(incrementRentalCount, incrementTimeRental);
          return prevCount + 1;
        } else {
          return endCountRental;
        }
      });
    };
  
    incrementRecruitmentCount();
    incrementRentalCount();
  
  }, []);

  // Render a box with a dynamic count and title
  const renderBox = (count, title, link) => (
    <div className="box">
      <h2>{count}</h2>
      <p>{title}</p>
      <button><Link href={link}>المزيد</Link></button>
    </div>
  );

  return (
    <section>
      <div className="hero-class">
        {/* Your other hero content here */}
      </div>

      <div className="flex bg-box">
        {renderBox(recruitmentCount, "دول الاستقدام", "/rent-countries")}
        {renderBox(rentalCount, "دول الايجار", "/rent-countries")}
      </div>
    </section>
  );
};

export default Hero;
