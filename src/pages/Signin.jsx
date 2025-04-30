import React, { useState } from "react";
import { Form } from "antd";
import Modal from "../components/Modal";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Signin = () => {
  const [showModal, setShowModal] = useState(false);

  const onFinish = async (values) => {
    console.log(values);
  };

  return (
    <div className="bg-gray-200 mx-auto p-5 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 text-center">
        <div className="bg-white shadow-2xl flex md:flex-row flex-col md:w-3/5 w-full">
          {/*---- Notice Section  -----*/}
          <div className="md:w-2/5 bg-yellow-950 text-white md:py-32 md:px-12 py-16 px-10">
            <h2 className="md:text-3xl text-2xl font-bold mb-2">
              Hello, Client
            </h2>
            <div className="border-2 w-10 border-white inline-block mb-3"></div>
            <p className="mb-8 md:text-base text-sm">
              Fill the personal information and Start your journey with us.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="border-2 border-orange-500 text-orange-500 md:px-8 md:py-2 px-6 py-2 font-medium text-base hover:bg-orange-500 hover:text-white mb-10 transition-all"
            >
              LEARN MORE
            </button>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
              <div className="text-start p-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3 uppercase">
                  How to become a Subscriber
                </h3>
                <h4 className="text-gray-500 mb-3">
                  To be able to sign up as a subscriber there are steps needs to
                  be taking before proceeding. This steps are listed below:
                </h4>
                <ul className="list-disc list-inside space-y-3 font-light text-gray-500 mb-5">
                  <li>First, Sign Up and Verify your Email </li>
                  <li>Second, Get Offer Letter and Complete all Documents</li>
                  <li>Third, Get your Subscription Information</li>
                  <li>Fourth, Sign Up with you Subscription id</li>
                  <li>Fifth, After Sign Up Successfully</li>
                  <li>Finally, Sign in with your Valid Email</li>
                </ul>
                <h4 className="mb-5 text-gray-950">
                  NOTE: Using a valid Email Address is very Important!
                </h4>
                <button className="bg-orange-500 text-white md:px-8 md:py-2 px-6 py-2">
                  Sign Up
                </button>
              </div>
            </Modal>
            <div className="text-end">
              <Link to="/" className="hover:text-orange-500 text-base">
                Go to HOME
              </Link>
            </div>
          </div>

          {/*---- Signin Section   -----*/}
          <div className="md:w-3/5 md:p-5 p-2.5">
            <div className="items-start">
              <img
                src={assets.logo_for_signin}
                className="md:w-32 w-24 cursor-pointer"
              />
            </div>
            <div className="py-10">
              <h2 className="md:text-3xl text-xl font-bold text-yellow-950 mb-2">
                Sign In to your Account
              </h2>
              <div className="border-2 w-10 border-yellow-950 inline-block mb-2"></div>
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
                      className="text-base text-gray-600 border border-yellow-950 outline-none py-2 px-4 w-full"
                    />
                  </Form.Item>
                  <div className="">
                    <Form.Item
                      label="Enter Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Password is required!",
                        },
                      ]}
                    >
                      <input
                        placeholder="Enter Your Password"
                        type="password"
                        className="border border-yellow-950 outline-none py-2 px-4 w-full"
                      />
                    </Form.Item>
                    <div className="flex justify-between mt-3">
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        className="text-sm cursor-pointer"
                      >
                        <input type="checkbox" /> <label>Remember Me</label>
                      </Form.Item>
                      <Link
                        to="/forgot-password"
                        className="hover:text-orange-500 text-sm"
                      >
                        Forget Password ?
                      </Link>
                    </div>
                  </div>
                  <button
                    className="bg-orange-500 text-white px-6 py-3 w-full hover:bg-yellow-900 transition-all"
                    type="submit"
                  >
                    SIGN-IN
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

export default Signin;
