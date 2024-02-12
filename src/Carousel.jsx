import { useState } from "react";
import { shortList, longList, list } from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { useEffect } from "react";

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [index, setIndex] = useState(0);
  const handleNxtBtn = () => {
    if (index < people.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const  handlePrevBtn= () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(people.length - 1);
    }
  };
  useEffect(() => {
    let sliderId = setInterval(() => {
      handlePrevBtn();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [index]);
  const { id, image, name, title, quote } = people[index];
  return (
    <section className="slider-container">
      <article className="slide" key={id}>
        <img src={image} alt={name} className="person-img"></img>
        <h5 className="name">{name}</h5>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight className="icon"></FaQuoteRight>
      </article>
      <button type="button" onClick={handlePrevBtn} className="prev">
        <FiChevronLeft></FiChevronLeft>
      </button>
      <button type="button" onClick={handleNxtBtn} className="next">
        <FiChevronRight></FiChevronRight>
      </button>
    </section>
  );
};

export default Carousel;
