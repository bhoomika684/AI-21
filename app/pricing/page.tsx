"use client"; // This directive marks the entire file as a Client Component

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import Footer from '@/components/footer';

// Mock Button component to avoid external dependencies.
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = "", ...props }) => {
  return (
    <button className={`rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`} {...props}>
      {children}
    </button>
  );
};

const PricingSection = () => {
  return (
    <>
    <Header/>
    <section className="py-8 lg:py-10 bg-red-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Perfect Plan</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Simple, transparent pricing that scales with your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard</h3>
            <p className="text-3xl font-extrabold text-red-600 mb-6">
              $29<span className="text-lg text-gray-500">/month</span>
            </p>
            <ul className="text-gray-700 space-y-3 mb-8 flex-grow">
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                500 Contacts
              </li>
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                10 Campaigns
              </li>
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Basic Analytics
              </li>
              <li className="flex items-center justify-center text-gray-400">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                24/7 Support
              </li>
            </ul>
            <Button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition-all duration-300">
              Choose Basic
            </Button>
          </div>

          {/* Standard Plan Card (Highlighted) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-600 flex flex-col items-center text-center transition-transform transform scale-105 duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprice</h3>
            <p className="text-3xl font-extrabold text-red-600 mb-6">
              $59<span className="text-lg text-gray-500">/month</span>
            </p>
            <ul className="text-gray-700 space-y-3 mb-8 flex-grow">
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                2,000 Contacts
              </li>
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Unlimited Campaigns
              </li>
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Advanced Analytics
              </li>
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 Priority Support
              </li>
            </ul>
            <Button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition-all duration-300">
              Choose Standard
            </Button>
          </div>

          {/* Premium Plan Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprice Plus</h3>
            <p className="text-3xl font-extrabold text-red-600 mb-6">
              $99<span className="text-lg text-gray-500">/month</span>
            </p>
            <ul className="text-gray-700 space-y-3 mb-8 flex-grow">
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Unlimited Contacts
              </li>
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Unlimited Campaigns
              </li>
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Custom Analytics
              </li>
              <li className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Dedicated Support
              </li>
            </ul>
            <Button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition-all duration-300">
              Choose Premium
            </Button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default PricingSection;
