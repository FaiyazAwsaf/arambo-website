"use client";
import BlogDetails from "@/components/BlogDetails";
import KnowYourProperty from "@/components/homepageComponents/KnowYourProperty";
import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Explore Verified Listings",
    status: "Recent",
    date: "August 1, 2025",
    timeago: "5 min",
    href: "/blog-details",
    src: "/common/buildings.jpg",
  },
  {
    id: 2,
    title: "Explore Verified Listings",
    status: "Recent",
    date: "August 10, 2025",
    timeago: "2 hours",
    href: "/blog-details",
    src: "/common/workers.jpg",
  },
  {
    id: 3,
    title: "Explore Verified Listings",
    status: "Recent",
    date: "August 22, 2025",
    timeago: "8 min",
    href: "/blog-details",
    src: "/common/structure.jpg",
  },
  {
    id: 4,
    title: "Explore Verified Listings",
    status: "Recent",
    date: "August 1, 2025",
    timeago: "5 min",
    href: "/blog-details",
    src: "/common/buildings.jpg",
  },
  {
    id: 5,
    title: "Explore Verified Listings",
    status: "Recent",
    date: "August 10, 2025",
    timeago: "2 hours",
    href: "/blog-details",
    src: "/common/workers.jpg",
  },
  {
    id: 6,
    title: "Explore Verified Listings",
    status: "Recent",
    date: "August 22, 2025",
    timeago: "8 min",
    href: "/blog-details",
    src: "/common/structure.jpg",
  },
  {
    id: 7,
    title: "Explore Verified Listings",
    status: "Recent",
    date: "August 1, 2025",
    timeago: "5 min",
    href: "/blog-details",
    src: "/common/buildings.jpg",
  },
  {
    id: 8,
    title: "Explore Verified Listings",
    status: "Recent",
    date: "August 10, 2025",
    timeago: "2 hours",
    href: "/blog-details",
    src: "/common/workers.jpg",
  },
  {
    id: 9,
    title: "Explore Verified Listings",
    status: "Recent",
    date: "August 22, 2025",
    timeago: "8 min",
    href: "/blog-details",
    src: "/common/structure.jpg",
  },
];

const BlogPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div
        style={{
          background:
            "linear-gradient(180deg, #000B26 0%, #00123C 19.69%, #032471 70.33%, #0C39A3 86.64%, #0041D9 100%)",
        }}
        className="relative h-94 flex flex-col justify-center items-start rounded-2xl text-Arambo-White p-5 mb-5"
      >
        <h1 className="h1 mb-8 text-left ml-0 md:ml-24">
          Stay Informed With <br /> Our Real Estate Blog
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="h3 mb-4 text-left">
          <span className="text-Arambo-Accent">Latest </span> News
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {blogs.slice(0, visibleCount).map((blog) => (
            <BlogDetails key={blog.id} {...blog} href={blog.id.toString()} />
          ))}
        </div>

        {visibleCount < blogs.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-Arambo-Accent text-white rounded-md font-medium hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}

        <section className="space-y-12 py-24 flex justify-center bg-Arambo-White mt-50">
          <KnowYourProperty />
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
