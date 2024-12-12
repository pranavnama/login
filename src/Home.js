import React, { useEffect, useState } from "react";

const Home = () => {
  const [images, setImages] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("http://localhost:5001/images") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch images.");
        }
        return response.json();
      })
      .then((data) => {
        setImages(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false); 
      });
  }, []);


  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>;
  }


  if (error) {
    return (
      <p style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
        {error}
      </p>
    );
  }


  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 className="text-blue-600 text-5xl font-bold">FaceBook Home Page</h1>
      <div className="flex justify-center flex-wrap gap-5 mt-5">
  {images.map((image) => (
    <div key={image._id} className="text-center">
      <img
        src={image.url}
        alt={image.name}
        className="w-[300px] h-auto rounded-lg shadow-md"
      />
      <p className="mt-2 font-bold">{image.name}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default Home;
