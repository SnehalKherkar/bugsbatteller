import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillFacebook } from "react-icons/ai";
import {AiFillInstagram } from "react-icons/ai";
import {IoLogoYoutube } from "react-icons/io";
import {HiLocationMarker } from "react-icons/hi";
import {HiMail } from "react-icons/hi";
import {MdCall } from "react-icons/md";
import {BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div style={{margin:"10px",marginTop:"100px"}}>
        <Container>
          <Row>
            <Col>
              <div>
                <img
                  src="https://themes.dynamiclayers.net/arkid/wp-content/themes/arkid/assets/img/logo-dark.png"
                  alt=""
                  style={{ width: "100px" }}
                />
                <p style={{marginTop:"20px"}}>We provide outstanding business consulting services through teamwo</p>
                <div style={{fontSize:"30px"}}>
                    <AiFillFacebook/>
                    <AiFillInstagram/>
                    <IoLogoYoutube/>
                </div>
              </div>
            </Col>
            <Col>
            <div>
                <h5>COMPANY</h5>
                <p>About Us</p>
                <p>Our Service</p>
                <p>Help & FAQs</p>
                <p>Contact Us</p>
            </div>
            </Col>
            <Col>
            <div>
                <h5>HEADQUARTERS</h5>
                <p><span ><HiLocationMarker style={{backgroundColor:"white",color:"#BFCA02"}}/></span> 962 Fifth Avenue, 3rd Floor New York, NY10022</p>
                <p><HiMail style={{backgroundColor:"white",color:"#BFCA02"}}/>Hello@dynamiclayers.net</p>
                <p><MdCall style={{backgroundColor:"white",color:"#BFCA02"}}/> (+123) 456 789 101</p>
            </div>
            </Col>
            <Col>
            <div>
                <h5>NEWSLETTER</h5>
                <p>Stay always in touch! Subscribe to our newsletter.</p>
                <input type="search" placeholder="Email*" style={{border:"1px solid #BFCA02 "}} required />
                <button style={{backgroundColor:"#BFCA02",color:"white",border:"none"}}><BsFillSendFill /></button>
                <p>* Don't worry, we don't spam.</p>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
