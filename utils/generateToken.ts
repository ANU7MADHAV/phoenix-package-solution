import jwt from "jsonwebtoken";

const generateToken = (email: string) => {
  return jwt.sign({ data: email }, process.env.SE as string, {
    expiresIn: "1d",
  });
};

export default generateToken;
