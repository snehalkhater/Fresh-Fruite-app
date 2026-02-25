import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import toast, { Toaster } from "react-hot-toast";

const ContactCard = ({ title, detail, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-white p-6 cursor-pointer rounded-2xl shadow hover:shadow-lg transition md:w-80 w-full text-center"
        >
            <h3 className="font-semibold text-lg text-[#CD2C58]">{title}</h3>
            <p className="text-gray-600 mt-2">{detail}</p>
        </div>
    );
};

function CallUs() {
    return (
        <div className=" min-h-screen flex flex-col mt-18">
            <Navbar />

            <div className="flex-grow px-6 py-12">

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-[#CD2C58]">
                        Contact to Fruitify
                    </h1>
                    <p className="text-gray-600 mt-3">
                        We deliver freshness & happiness. Contact us anytime!
                    </p>
                </div>

                <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
                    <h3 className="text-xl font-semibold text-center text-[#CD2C58] mb-6">
                        Send us a Message
                    </h3>

                    <div className="flex flex-col gap-4">
                        <input
                            required
                            placeholder="Your Name"
                            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#CD2C58]"
                        />

                        <input
                            required
                            type="email"
                            placeholder="Your Email"
                            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#CD2C58]"
                        />

                        <textarea
                            required
                            placeholder="Your Message"
                            rows="4"
                            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#CD2C58]"
                        ></textarea>

                        <Button
                            title="Send Message"
                            variant="primary"
                            size="medium"
                            onClick={() => {
                                const inputs = document.querySelectorAll("input[required]");
                                const textarea = document.querySelector("textarea[required]");

                                if (inputs[0].value && inputs[1].value && textarea.value) {
                                    toast.success("Message sent successfully!");
                                    inputs.forEach((i) => (i.value = ""));
                                    textarea.value = "";
                                } else {
                                    toast.error("Please fill all fields");
                                }
                            }}
                        />
                    </div>
                </div>

                <Toaster position="top-center" />
            </div>

            <Footer />
        </div>
    );
}

export default CallUs;