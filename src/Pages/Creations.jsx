import React, { useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import { Link } from "react-router";

const Creations = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/image/all")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <div>
      <PageTitle>All Images</PageTitle>
      <h2>Total Images: {images.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((img) => (
          <div key={img._id} className="card bg-base-100 w-96 shadow-sm relative">
            <figure>
              <img src={img.thumbImg} alt="Shoes" className="w-full" />
            </figure>
            <div className="card-body absolute bottom-1.5 right-2">
              <Link to={`/creations/${img._id}`} className="btn btn-primary">Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creations;
