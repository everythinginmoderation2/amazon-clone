import React from "react";
import "./Home.css";
import Product from "./Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="gradient"/>
        <div className="home__row">
          <Product
            key={`euarw8w`}
            id={`${Math.random() * 100000}`}
            title="Table Monkey"
            price={29.99}
            image="https://www.animalsstatue.com/wp-content/uploads/2021/01/28.Monkey-art-sculpture-of-coffee-table-1.png"
            rating={5}
          />
          <Product
            key={`ekarz8w`}
            id={`${Math.random() * 100000}`}
            title="Yogi Monkey"
            price={29.99}
            rating={5}
            image="https://static.athome.com/images/w_800,h_800,c_pad,f_auto,fl_lossy,q_auto/v1629487833/p/124346932/gold-yogi-monkey-6.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            key={`ekamw8w`}
            id={`${Math.random() * 100000}`}
            title="Hear No Monkey"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81W6jPuLoCL._AC_SX569_.jpg"
            rating={5}
          />
          <Product
            key={`ekarp8w`}
            id={`${Math.random() * 100000}`}
            title="See No Monkey"
            price={39.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81VUJ7Fr72L._AC_SX569_.jpg"
          />
          <Product
            key={`ekarw8w`}
            id={`${Math.random() * 100000}`}
            title="Speak No Monkey"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81U2qPIrOXL._AC_SX569_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key={`ekare8w`}
            id={`${Math.random() * 100000}`}
            title="Cheeky Monkeys"
            price={39.99}
            image="https://m.media-amazon.com/images/I/A110U908zdL._AC_SX569_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
