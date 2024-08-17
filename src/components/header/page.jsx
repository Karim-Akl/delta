"use client";
import React from "react";
import { useState } from "react";
import "./header.css";
import Link from "next/link";
const Page = () => {
  const [showModal, setshowModal] = useState(false);

  return (
    <div>
      <header>
        <div className=" flex navbur container">
          <div
            className="flex"
            style={{ justifyContent: "space-between", gap: "10rem" }}
          >
            <div className="img-class">
              <Link href="/">
                <img src="image/logo.png" alt="Logo" className="logo" />
              </Link>
            </div>
            <div>
              <ul className="flex">
                <li>الصفحة الرئيسية</li>
                <li>خدماتنا</li>
              <Link href="/contact">
                <li>اتصل بنا</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex" style={{ gap: "2rem" }}>
            <Link href="/contact">
            <button className="contact-but">ابقى على تواصل</button>
            </Link>
            <div>
              <button
                className="menu"
                onClick={() => {
                  setshowModal(true);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="6" width="18" height="2" fill="black" />
                  <rect x="3" y="11" width="18" height="2" fill="black" />
                  <rect x="3" y="16" width="18" height="2" fill="black" />
                </svg>
              </button>
              {showModal && (
                <div className="fixed">
                  <ul className="modal">
                    <li>
                      <button
                        className="icon-x"
                        onClick={() => {
                          setshowModal(false);
                        }}
                      >
                        x
                      </button>
                    </li>
                    <li
                      onClick={() => {
                        setshowModal(false);
                      }}
                    >
                      <Link href="/">الرئيسية الصفحة</Link>
                    </li>
                    <li>
                      <Link href="/about">خدماتنا</Link>
                    </li>
                    <li>
                      <Link href="contact"> اتصل بنا </Link>
                    </li>
                    {/* <li>
              <Link href=""></Link>
            </li>
            <li>
              <Link href="/contact"></Link>
            </li> */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Page;
