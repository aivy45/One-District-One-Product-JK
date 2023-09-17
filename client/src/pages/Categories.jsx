import React from "react";
import Layoutt from "../components/Layout/Layoutt";
import useCategory from "./../hooks/useCategory";
import { Link } from "react-router-dom";
import "../Styles/Categories.css";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layoutt title="All Categories">
      <div className="container pt-5 ">
        <h3 className="text-center catHead ">
          <u>All Districts</u>
        </h3>
        <div className="row catcard">
          {categories.map((c) => (
            <div className=" mt-5 " key={c._id}>
              <div className="card cardd">
                <Link to={`/category/${c.slug}`} className="btn p-4">
                  <h5>{c.name}</h5>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layoutt>
  );
};

export default Categories;
