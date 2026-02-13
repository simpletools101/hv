import React from "react";
import { MapPin, Bed, Bath, Home, Waves, Calendar } from "lucide-react";

import Climage from "@/assets/jk.webp"

export default function PropertyListing() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="flex items-start gap-3 mb-6">
            <MapPin className="w-8 h-8 mt-1" />
            <h1 className="text-4xl font-bold">Mulawa, Kira Property</h1>
          </div>

          {/* Description */}
          <div className="space-y-4 mb-8 text-gray-800">
            <p>
              Welcome to this stunning 4-bedroom, 3-bathroom home nestled in a
              quiet, family-friendly neighborhood. This beautifully maintained
              property boasts a spacious open-concept layout, modern kitchen
              with stainless steel appliances, and a sun-drenched living area
              perfect for entertaining. The master suite features a walk-in
              closet and luxurious en-suite bath.
            </p>
            <p>
              Outside, enjoy a private, fenced backyard ideal for gatherings or
              relaxing evenings. Located just minutes from top-rated schools,
              shopping, and parks, this home offers the perfect blend of
              comfort, style, and convenience.
            </p>
          </div>

          {/* Overview Section */}
          <h2 className="text-3xl font-bold mb-6">Overview</h2>

          <div className="border-2 border-black rounded-lg p-6 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Bed className="w-6 h-6" />
                <span className="font-medium">4 Bedrooms</span>
              </div>
              <div className="flex items-center gap-3">
                <Bath className="w-6 h-6" />
                <span className="font-medium">3 Bathrooms</span>
              </div>
              <div className="flex items-center gap-3">
                <Home className="w-6 h-6" />
                <span className="font-medium">2,500 sq.ft</span>
              </div>
              <div className="flex items-center gap-3">
                <Waves className="w-6 h-6" />
                <span className="font-medium">Swimming Pool</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                <span className="font-medium">Built in 2025</span>
              </div>
            </div>
          </div>

          {/* Virtual Tour Button */}
          <button className="w-full border-2 border-black rounded-full py-4 text-lg font-bold hover:bg-black hover:text-white transition-colors">
            TAKE A VIRTUAL TOUR
          </button>
          <div className="bg-black h-80 w-full mt-6 flex-0.5  rounded-2xl l"></div>

          {/**Property Video */}

          <button className="w-full mt-8 border-2 border-black rounded-full py-4 text-lg font-bold hover:bg-black hover:text-white transition-colors">
            PROPERTY VIDEO
          </button>
          <div className="bg-black h-80 w-full mt-6 flex-0.5  rounded-2xl l"></div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Price Card */}
          <div className="border-2 border-black rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="text-sm font-medium mb-2">PRICE</div>
              <div className="text-4xl font-bold mb-4">$126,000</div>
              <button className="w-full border-2 border-black rounded-full py-2 hover:bg-black hover:text-white transition-colors">
                PAYMENT DETAILS
              </button>
            </div>
          </div>

          {/* Thinking About Buying Card */}
          <div className="border-2 border-black rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-center">
              Thinking about buying?
            </h3>
            <div className="space-y-3">
              <button className="w-full bg-black text-white rounded-full py-2 hover:bg-gray-800 transition-colors">
                Take a Virtual Tour
              </button>
              <button className="w-full border-2 border-black rounded-full py-2 hover:bg-black hover:text-white transition-colors">
                Tour in person
              </button>
              <button className="w-full border-2 border-black rounded-full py-2 hover:bg-black hover:text-white transition-colors">
                Request Showing
              </button>
              <div className="text-center text-sm">or</div>
              <button className="w-full bg-black text-white rounded-full py-2 hover:bg-gray-800 transition-colors">
                Start an offer
              </button>
            </div>
          </div>

          {/* Talk to Agent Card */}
          <div className="border-2 border-black rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Talk to agent</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-black rounded-full"></div>
              <div>
                <div className="font-bold">Olivia Janda</div>
                <div className="text-sm text-gray-600">
                  Senior Real Estate Advisor
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="border-2 border-black rounded-full py-2 text-sm hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                <span>💬</span> Message Agent
              </button>
              <button className="border-2 border-black rounded-full py-2 text-sm hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                <span>📞</span> Call Agent
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-2 flex-col items-center flex justify-center">
        <button className="w-[300px] mt-8 border-2 border-black rounded-full py-4 text-lg font-bold hover:bg-black hover:text-white transition-colors">
          FLOOR PLAN
        </button>
        <div>
            <img src={Climage.src} alt="jj" />
        </div>
      </div>
    </div>
  );
}
