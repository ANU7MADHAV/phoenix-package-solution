"use client";

import { FormEvent } from "react";

const Login = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const submitData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    console.log(submitData);
  };
  return (
    <div className="flex flex-col justify-center items-center rounde shadow-lg border p-5">
      <form
        className="flex flex-col gap-y-2 justify-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1"
        />
        <input
          type="submit"
          className="bg-blue-500 text-white  px-2 py-1 rounded-md text-center"
        />
      </form>
    </div>
  );
};

export default Login;
