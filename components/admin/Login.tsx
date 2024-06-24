"use client";
import { signInValidation } from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

interface LoginResponse {
  success: boolean;
  data: any;
  message?: string;
}

type ValidationSchema = z.infer<typeof signInValidation>;

const Login = () => {
  const router = useRouter();
  const { handleSubmit } = useForm<ValidationSchema>({
    resolver: zodResolver(signInValidation),
  });
  const onSubmit: SubmitHandler<ValidationSchema> = (submitData) => {
    const fetchData = async () => {
      try {
        const res: AxiosResponse<LoginResponse> = await axios.post(
          "/api/login",
          submitData
        );
        console.log("hello");
        console.log(res);
        console.log("data", res.data.message);
        if (res.data?.message === "Logged") {
          console.log("yes");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center rounde shadow-lg border p-5"
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
        <input type="submit" className="bg-blue-500 rounded-lg" />
      </form>
    </div>
  );
};

export default Login;
