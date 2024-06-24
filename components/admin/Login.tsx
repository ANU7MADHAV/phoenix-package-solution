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
  const { handleSubmit, register } = useForm<ValidationSchema>({
    resolver: zodResolver(signInValidation),
  });
  const onSubmit: SubmitHandler<ValidationSchema> = (submitData) => {
    const fetchData = async () => {
      try {
        const res: AxiosResponse<LoginResponse> = await axios.post(
          "/api/login",
          submitData
        );

        if (res.data?.message === "Logged") {
          router.push("/admin/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    };
    console.log("clicked");
    fetchData();
  };

  return (
    <div className="shadow-lg rounded-lg border p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1"
        />
        <input
          type="submit"
          className="bg-blue-500 rounded-lg px-2 py-1 text-white"
        />
      </form>
    </div>
  );
};

export default Login;
