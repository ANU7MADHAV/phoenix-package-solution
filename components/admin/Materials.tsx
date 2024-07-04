"use client";
import { useState } from "react";

const UploadForm = () => {
  const [productName, setProductName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);
    formData.append("productname", productName);
    console.log("formData", formData);
    const uploadRes = await fetch("/api/upload/materials", {
      method: "POST",
      body: formData,
    });

    const uploadData = await uploadRes.json();
    if (!uploadRes.ok) {
      alert("Failed to upload image.");
      return;
    }

    console.log(uploadData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input type="file" onChange={handleFileChange} required />
        </label>
      </div>
      <button type="submit">Upload Product</button>
    </form>
  );
};

export default UploadForm;
