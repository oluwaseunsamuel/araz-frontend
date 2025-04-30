import React from "react";
import { assets } from "../assets/assets";
import { Form } from "antd";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const onFinish = async (values) => {
    console.log(values);
  };

  return (
    <div className="bg-gray-200 mx-auto p-5 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 text-center ">
        <div className="bg-white shadow-2xl flex md:flex-row flex-col md:w-2/4 w-full">
          {/*---- Notice Section  -----*/}
          <div className="md:w-2/5 bg-yellow-950 text-white md:py-32 md:px-8 py-16 px-4">
            <h2 className="md:text-3xl text-2xl font-bold mb-2">
              Hello, Client
            </h2>
            <div className="border-2 w-10 border-white inline-block mb-3"></div>
            <p className="mb-8 md:text-base text-sm">
              Fill in your email to reset your password.
            </p>
            <div className="text-end mb-3">
              <Link to="/" className="hover:text-orange-500 text-base">
                Go to HOME
              </Link>
            </div>
            <div className="text-end">
              <Link to="/signin" className="hover:text-orange-500 text-base">
                Go to SIGN IN
              </Link>
            </div>
          </div>
          {/*---- Forgot Password Section   -----*/}
          <div className="md:w-3/5 md:p-5 p-2.5">
            <div className="items-start">
              <img
                src={assets.logo_for_signin}
                className="md:w-32 w-24 cursor-pointer"
              />
            </div>
            <div className="py-10">
              <h2 className="md:text-3xl text-xl font-bold text-yellow-950 mb-1">
                Reset Your Password
              </h2>
              <div className="border-2 w-10 border-yellow-950 inline-block mb-2"></div>
              <p className="font-extralight">
                Enter Your Register Email Address
              </p>
              <div className="flex flex-col items-center mt-5">
                <Form
                  layout="vertical"
                  autoComplete="off"
                  onFinish={onFinish}
                  className="w-[310px] text-start space-y-5"
                >
                  <Form.Item
                    label="Enter Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Email is required!",
                      },
                      {
                        type: "email",
                        message: "Please enter a valid email!",
                      },
                    ]}
                  >
                    <input
                      placeholder="Enter Your Email"
                      className=" border border-yellow-950 outline-none py-2 px-4 w-full"
                    />
                  </Form.Item>
                  <button
                    className="bg-orange-500 text-white px-6 py-3 w-full hover:bg-yellow-950 transition-all"
                    type="submit"
                  >
                    SUMBIT
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
