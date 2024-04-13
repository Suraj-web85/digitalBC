import React from "react";
import "./Card.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare,FaInstagramSquare,FaGithubSquare } from "react-icons/fa";


function Card() {
  return (
    <div className="main-container">
      <img src="/babyboss.jpg" alt="" width="100%" />
      <div className="second-con">
        <div className="con-und">
          <h3>Baby Boss</h3>
          <p className="de-sn">Frontend Developer</p>
          <p className="e-ma-l">BabyBossh@gmail.com</p>
        </div>

        <div className="cntct-btns">
          <button className="e-ma-l-btn" type="button">
            <MdEmail /> Email
          </button>
          <button className="lnkd-btn" type="button">
            <FaLinkedin /> LinkedIn
          </button>
        </div>

        <div className="content">
          <div className="frst-sec">
            <h3 className="abt-sec">About</h3>
            <p className="abt-ct lh">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>

          <div>
            <h3 className="abt-sec">Interest</h3>
            <p className="lh abt-ct">
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>

       
      </div>
      <div className="con-icons">
        <FaTwitterSquare />
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaGithubSquare />
          
        </div>
    </div>
  );
}

export default Card;
