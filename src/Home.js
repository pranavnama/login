// code to fetch images from mongoDB


// import React, { useEffect, useState } from "react";

// const Home = () => {
//   const [images, setImages] = useState([]); 
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null);


//   useEffect(() => {
//     fetch("http://localhost:5001/images") 
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch images.");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setImages(data); 
//         setLoading(false); 
//       })
//       .catch((error) => {
//         setError(error.message); 
//         setLoading(false); 
//       });
//   }, []);


//   if (loading) {
//     return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>;
//   }


//   if (error) {
//     return (
//       <p style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
//         {error}
//       </p>
//     );
//   }


//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1 className="text-blue-600 text-5xl font-bold">FaceBook Home Page</h1>
//       <div className="flex justify-center flex-wrap gap-5 mt-5">
//   {images.map((image) => (
//     <div key={image._id} className="text-center">
//       <img
//         src={image.url}
//         alt={image.name}
//         className="w-[300px] h-auto rounded-lg shadow-md"
//       />
//       <p className="mt-2 font-bold">{image.name}</p>
//     </div>
//   ))}
// </div>

//     </div>
//   );
// };

// export default Home;



// code for unsplash image api

// import React, { useEffect, useState } from "react";

// const Home = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchImages = async () => {
//       const accessKey = "QvU3xuCo3rFo7t_1-MNiRQavTdX9tsNk1ZlCUxP_AYo"; // Replace with your Unsplash API Key
//       const apiUrl = `https://api.unsplash.com/photos?client_id=${accessKey}&per_page=10`;

//       try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error("Failed to fetch images from Unsplash.");
//         }
//         const data = await response.json();
//         setImages(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <div className="min-h-screen bg-blue-200 py-10">
//   <h1 className="text-blue-700 text-5xl font-bold font-sans text-center mb-10">
//     FaceBook Home Page
//   </h1>
//   <div className="flex flex-wrap justify-center gap-6 px-4">
//     {images.map((image) => (
//       <div
//         key={image.id}
//         className="w-72 h-96 bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:border-4 hover:border-blue-500"
//       >
//         <img
//           src={image.urls.small}
//           alt={image.alt_description || "Image"}
//           className="w-full h-3/4 object-cover"
//         />
//         <div className="h-1/4 flex items-center justify-center bg-gray-100">
//           <p className="text-gray-800 font-semibold">
//             {image.description || "Image"}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//     </div>
//   );
// };

// export default Home;


// bg-gradient-to-br from-lime-300 to-lime-400


import React, { useEffect, useState } from "react";

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const accessKey = "QvU3xuCo3rFo7t_1-MNiRQavTdX9tsNk1ZlCUxP_AYo"; 
      const apiUrl = `https://api.unsplash.com/photos?client_id=${accessKey}&per_page=10`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch images from Unsplash.");
        }
        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-custom-brown text-white">
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1 className="text-custom-brown-2 text-4xl font-semibold font-mono text-center mb-10"> FaceBook Home Page </h1>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="w-72 h-96 bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:border-4 hover:border-custom-brown-3 hover:bg-gradient-to-br hover:from-gray-900 hover:to-black">
              <img
                src={image.urls.small}
                alt={image.alt_description || "Image"}
                className="w-full h-3/4 object-cover"/>
              <div className="h-1/4 flex items-center justify-center bg-custom-brown-2">
                <p className="text-white font-mono">
                  {image.description || "Image"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
