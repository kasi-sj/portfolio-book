"use client";

import React from "react";

type PageProps = {
  children: React.ReactNode;
  number: number;
  title?: string; // Optional page title
};

const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ children, number, title }, ref) => {
    return (
      <div
        ref={ref}
        className="w-full h-full bg-[url('/paper-texture.jpg')] text-gray-800 p-6 flex flex-col justify-between rounded-xl shadow-lg border border-gray-200"
        style={{
          backgroundImage: "url('/paper-texture.jpg')",
          backgroundSize: 'auto',  // Maintain the image's original size
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',  // Repeat the background
        }}
      >
        {/* Page Header */}
        {title && (
          <div className="flex justify-between items-center text-sm text-gray-500 border-b pb-2">
            <span className="font-semibold">{title}</span>
            <span className="italic">Page {number}</span>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center text-2xl text-center">
          {children}
        </div>
      </div>
    );
  }
);

Page.displayName = "Page";
export default Page;
