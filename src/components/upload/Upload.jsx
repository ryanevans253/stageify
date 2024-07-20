import React, { useState } from "react";
import "./ImageUploadBox.css";

export default function ImageUploadBox() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputPromptString, setInputPromptString] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
      setInputPromptString(e.target.files[0].name); // Optionally set the input prompt to the image file name
    }
  };

  const handleFetch = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/test")
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    const file = document.querySelector('input[type="file"]').files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/api", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.message);
      } else {
        setResponseMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setResponseMessage("An error occurred while uploading the image.");
    }
  };

  return (
    <>
      <div className="upload-wrapper">
        <div className="image-upload-container">
          <div className="image-upload-box">
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          {selectedImage && (
            <div className="image-preview-container">
              <img
                src={selectedImage}
                alt="Selected"
                className="image-preview"
              />
            </div>
          )}
        </div>
        <div className="prompt-input" style={{ width: "400px" }}>
          <input
            style={{ width: "100%" }}
            value={inputPromptString}
            onChange={(e) => setInputPromptString(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Upload Image feth post request</button>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
      <button onClick={handleFetch}>fetch test</button>
    </>
  );
}

// import React, { useState } from "react";
// import "./ImageUploadBox.css";
// import TestApi from "../testapi/TestApi";

// export default function ImageUploadBox() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [inputPromptString, setInputPromptString] = useState("");

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setSelectedImage(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   return (
//     <>
//       <div className="upload-wrapper">
//         <div className="image-upload-container">
//           <div className="image-upload-box">
//             <input type="file" accept="image/*" onChange={handleImageChange} />
//           </div>
//           {selectedImage && (
//             <div className="image-preview-container">
//               <img
//                 src={selectedImage}
//                 alt="Selected"
//                 className="image-preview"
//               />
//             </div>
//           )}
//         </div>
//         <div className="prompt-input" style={{ width: "400px" }}>
//           <input
//             style={{ width: "100%" }}
//             onChange={(e) => setInputPromptString(e.target.value)}
//           />
//         </div>
//         <p>{inputPromptString}</p>
//         {/* <TestApi /> */}
//       </div>
//     </>
//   );
// }
