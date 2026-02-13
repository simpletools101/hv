import React from "react";

export default function HaveyHomesFooter() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Copyright and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-10 gap-6">
          {/* Left Side - Copyright and Phone */}
          <div>
            <div className="text-base md:text-lg mb-1">2026 © COPYRIGHT</div>
            <div className="text-xl md:text-2xl font-semibold">
              TEL: 0300 500600
            </div>
          </div>

          {/* Right Side - Get in Touch */}
          <div className="md:text-right">
            <div className="text-base md:text-lg mb-1">GET IN TOUCH</div>
            <a
              href="mailto:marketing@haveyhomes.com"
              className="text-xl md:text-2xl font-semibold hover:underline"
            >
              marketing@haveyhomes.com
            </a>
          </div>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          {/* Property Details Links */}
          <div className="flex flex-wrap items-center gap-1 text-sm">
            <a href="#details" className="hover:underline">
              Details
            </a>
            <span className="mx-1">|</span>
            <a href="#virtual-tour" className="hover:underline">
              Virtual Tour
            </a>
            <span className="mx-1">|</span>
            <a href="#photos" className="hover:underline">
              Photos
            </a>
            <span className="mx-1">|</span>
            <a href="#video" className="hover:underline">
              Video
            </a>
            <span className="mx-1">|</span>
            <a href="#floor-plan" className="hover:underline">
              Floor Plan
            </a>
            <span className="mx-1">|</span>
            <a href="#map" className="hover:underline">
              Map
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap items-center gap-1 text-sm font-medium tracking-wide">
            <a href="#instagram" className="hover:underline">
              INSTAGRAM
            </a>
            <span className="mx-1">|</span>
            <a href="#facebook" className="hover:underline">
              FACEBOOK
            </a>
            <span className="mx-1">|</span>
            <a href="#linkedin" className="hover:underline">
              LINKEDIN
            </a>
            <span className="mx-1">|</span>
            <a href="#facebook" className="hover:underline">
              FACEBOOK
            </a>
          </div>
        </div>

        {/* Brand Logo */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight">
            HaveyHomes
          </h1>
        </div>

        {/* Bottom Section - Legal Links */}
        <div className="text-center text-xs md:text-sm tracking-wider">
          <a href="#privacy-policy" className="hover:underline">
            PRIVACY POLICY
          </a>
          <span className="mx-2">|</span>
          <a href="#terms-of-use" className="hover:underline">
            TERMS OF USE
          </a>
          <span className="mx-2">|</span>
          <a href="#cookie-policy" className="hover:underline">
            COOKIE POLICY
          </a>
        </div>
      </div>
    </footer>
  );
}
