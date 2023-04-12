import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isEmailValid, setIsEmailValid] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleEmailValidation = (e) => {
    const email = e.target.value;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (emailRegex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <div id="contact" className="z-10 relative flex flex-col justify-center items-center bg-transparent shadow-md rounded-md p-6 w-full h-screen mx-auto">
      <h2 className="font-prompt text-5xl md:text-9xl font-bold mb-4 text-center">Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-2xl">
        <div className="mb-4">
          <label htmlFor="name" className="font-prompt text-gray-700 text-base mb-2">
            Name
          </label>
          <input {...register("name", { required: true })} type="text" id="name" name="name" className="border-2 border-gray-300 p-2 w-full rounded-md font-prompt text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          {errors.name && <p className="font-prompt text-red-500 text-sm mt-1">This field is required.</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="font-prompt text-gray-700 text-base mb-2">
            Email
          </label>
          <input {...register("email", { required: true })} type="email" id="email" name="email" className={`border-2 border-gray-300 p-2 w-full rounded-md font-prompt text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${!isEmailValid && "border-red-500"}`} onBlur={handleEmailValidation} />
          {!isEmailValid && <p className="font-prompt text-red-500 text-sm mt-1">Please enter a valid email address.</p>}
          {errors.email && <p className="font-prompt text-red-500 text-sm mt-1">This field is required.</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="font-prompt text-gray-700 text-base mb-2">
            Message
          </label>
          <textarea {...register("message", { required: true })} id="message" name="message" className="border-2 border-gray-300 p-2 w-full rounded-md font-prompt text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-40" />
          {errors.message && <p className="font-prompt text-red-500 text-sm mt-1">This field is required.</p>}
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
