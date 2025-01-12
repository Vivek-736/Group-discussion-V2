/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ContactPage = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen flex items-center justify-center p-4">
            <div className="max-w-2xl w-full mx-4 p-8 bg-white rounded-lg shadow-2xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
                    Contact Vivek, the Developer 🚀
                </h1>

                <p className="text-lg md:text-xl text-gray-700 mb-8">
                    Want to know how this magical website was built? Or just want to say hi? Vivek is your guy!
                </p>

                <div className="bg-purple-50 p-6 rounded-lg mb-8">
                    <p className="text-purple-800 text-lg">
                        "I promise I don't bite... unless you ask about why the code isn't working at 2 AM. 😅"
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="bg-indigo-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-2">Reference</h2>
                        <p className="text-gray-600">
                            <a
                                target="_main"
                                href="https://github.com/Vivek-736"
                                className="text-indigo-600 hover:underline"
                            >
                                Github
                            </a>
                        </p>
                    </div>
                </div>

                <div className='hidden md:block'>
                    <div className="flex flex-col items-center mt-8">
                        <button className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors w-auto">
                            Send a Pigeon 🐦 (or just email)
                        </button>
                        <span className="text-gray-600 mt-2">
                            Don't click the button, it doesn't do anything. 😅
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactPage;
