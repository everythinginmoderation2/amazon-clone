import React from "react";
import "./Home.css";
import Product from "./Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <div className="gradient">
        <img
          className="home__image"
          src=""
          alt="crimson red"
        />
        </div>
        <div className="home__row">
          <Product
            id={`${Math.random()*100000}`}
            title="The Lean Start Up"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id={`${Math.random()*100000}`}
            title="Samsung LC4RG9XDFAFA 49' Curved LED Gaming"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={`${Math.random()*100000}`}
            title="The Chicken and the Hen"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            key={`${Math.random()*100000}`}
            id={`${Math.random()*100000}`}
            title="Samsung LC4RG9XDFAFA 59' Curved LED Gaming"
            price={399.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
          <Product
          key={`${Math.random()*100000}`}
            id={`${Math.random()*100000}`}
            title="MOOOOO WOP"
            price={4.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
          key={`${Math.random()*100000}`}
            id={`${Math.random()*100000}`}
            title="The"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
