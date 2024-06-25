const uploadStagedFile = async (stagedFile: File | Blob) => {
  const form = new FormData();
  form.set("file", stagedFile);

  // here /api/upload is the route of my handler
  const res = await fetch("/api/upload", {
    method: "POST",
    body: form,
    headers: {
      // add token
      // content-type will be auto-handled and set to multipart/form-data
    },
  });

  const data = await res.json();

  // we will return the uploaded image URL from the API to the client
  console.log(data.imgUrl);
};

export default uploadStagedFile;
