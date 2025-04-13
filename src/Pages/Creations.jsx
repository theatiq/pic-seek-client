import React, { useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle";

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
          <div key={img._id} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={img.thumbImg}
                alt="Shoes"
                className="w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Card Title
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creations;
