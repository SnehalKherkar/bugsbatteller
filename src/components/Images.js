import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
const Images = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div style={{ marginBottom: "350px",fontSize:"30px"}}>
            <h1 style={{textAlign: "start"}}>DREAM HOME MIGHT BE CLOSER THAN YOU THINK</h1>
            <h6 style={{textAlign: "start"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</h6>
            <button style={{display:"flex",backgroundColor:"#BFCA02",border:"none",color:"white"}} >View Project</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1026205392/photo/beautiful-luxury-home-exterior-at-twilight.jpg?s=612x612&w=0&k=20&c=HOCqYY0noIVxnp5uQf1MJJEVpsH_d4WtVQ6-OwVoeDo="
            alt="Second slide"
          />

          <Carousel.Caption>
            <div style={{ marginBottom: "350px",fontSize:"30px"}}>
            <h1 style={{textAlign: "start"}}>DREAM HOME MIGHT BE CLOSER THAN YOU THINK</h1>
            <h6 style={{textAlign: "start"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
            <button style={{display:"flex",backgroundColor:"#BFCA02",border:"none",color:"white"}} >View Project</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_640.jpg"
            alt="Third slide"
            
          />

          <Carousel.Caption>
            <div style={{ marginBottom: "350px" ,fontSize:"30px" }}>
              <h1 style={{ textAlign: "justify" }}>
                DREAM HOME MIGHT BE CLOSER THAN YOU THINK
              </h1>
              <h6 style={{ textAlign: "start" }}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </h6>
              <button style={{display:"flex",backgroundColor:"#BFCA02",border:"none",color:"white"}} >View Project</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Images;
