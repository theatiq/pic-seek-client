import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageTitle from "../components/shared/PageTitle";

const ImgDetails = () => {
  const { id } = useParams();
  const [image, setImage] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/image/single/${id}`)
      .then((res) => res.json())
      .then((data) => setImage(data));
  }, []);
  return (
    <div>
      <PageTitle>{image?.prompt}</PageTitle>
      <div className="w-11/12 mx-auto">
        <figure className="rounded-md flex justify-center">
          <img src={image.originalImg} alt="" className="rounded-md my-5"/>
        </figure>
      </div>
    </div>
  );
};

export default ImgDetails;
