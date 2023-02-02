import React from "react";
import "./product1.scss";

export default function Product1() {
  return(
    <div className="product1">
      <div className="heading">Our Products for Pregnancy Monitoring</div>
      <div className="sub__heading">
        Quinproc offers a variety of customizable products for monitoring
        pregnancy and labor, including remote monitoring applications.
      </div>
      <div className="products">

        <div className="product__container">
            <div className="text__container">
                <div className="top__text">
                    <div className="sno">01.</div>
                    <div className="title"> MaatrTV</div>
                </div>
                <div className="bottom__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit nemo tempore vel laboriosam explicabo dolorum accusamus dolores, natus delectus excepturi maxime asperiores neque voluptates sequi. Incidunt voluptatem perspiciatis vero.</div>
                <div className="more__button">Know More</div>
            </div>
            <div className="image__container">
                <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674151211/Quinproc/d8f1780744a29c11cd65b04c9d4047d3_ectqbu.png" alt="product-image" className="phone__pic"
                />
            </div>
        </div>

        <div className="product__container reverse">
            <div className="text__container put__end">
                <div className="top__text">
                    <div className="sno">02.</div>
                    <div className="title">Pregnancy Belt</div>
                </div>
                <div className="bottom__text rev">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit nemo tempore vel laboriosam explicabo dolorum accusamus dolores, natus delectus excepturi maxime asperiores neque voluptates sequi. Incidunt voluptatem perspiciatis vero.</div>
                <div className="more__button">Know More</div>
            </div>
            <div className="image__container__belt">
                <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674141454/Quinproc/prod_ubxiki.png" className="belt__img" alt="product-image" />
            </div>
        </div>

      </div>
    </div>
  );
}
