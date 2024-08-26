"use client";
import React from "react";
import Link from "next/link";
import "./main.css";
const Page = () => {
  return (
    <div className="llll">

    <main>
      <div className="flex">
        <div className="ll">
        <div className="text-main">
        <h1>شركة دلتا النسيم </h1>
        <p>
          في شركة دلتا النسيم ، نفخر بكوننا أحد الروّاد في تقديم خدمات المنزلية
          الممتازة في المملكة العربية السعودية، مع أعلى تقييم في مساند.
        </p>
        </div>
        <div className="main-but">
          <Link href="/our-services">
          <button>خدماتنا</button>
          </Link>
          <Link href="/contact">
                <button> تواصل معنا</button>
                </Link>
        </div>
        </div>

      </div>
    </main>
    </div>

  );
};

export default Page;
