import BlogDetails from "@/components/BlogDetails";
import KnowYourProperty from "@/components/homepageComponents/KnowYourProperty";
import { stat } from "fs";
import { notFound } from "next/navigation";
import { useMemo } from "react";

const blogs = [
  {
    id: 1,
    title: "Explore Verified Listings",
    date: "August 1, 2025",
    status: "Recent",
    timeago: "5min",
    author: "Kavien Bruyena",
    content: ` Sustainability and Green Living\n\nWith growing environmental concerns and a heightened focus on sustainability, green living has become a prominent trend in the real estate market. From energy-efficient features to eco-friendly building materials, buyers are increasingly prioritizing properties that minimize their environmental footprint.\n\nBringing the Outdoors Inside\n\nAs cities grow denser, architects are incorporating biophilic design to reconnect urban dwellers with nature. This blog explores how integrating natural elements into built environments is reshaping modern architecture.Sustainability and Green Living\n\nWith growing environmental concerns and a heightened focus on sustainability, green living has become a prominent trend in the real estate market. From energy-efficient features to eco-friendly building materials, buyers are increasingly prioritizing properties that minimize their environmental footprint.\n\nBringing the Outdoors Inside\n\nAs cities grow denser, architects are incorporating biophilic design to reconnect urban dwellers with nature. This blog explores how integrating natural elements into built environments is reshaping modern architecture.`,
    src: "/common/buildings.jpg",
  },
  {
    id: 2,
    title: "Explore Verified Listings",
    date: "August 1, 2025",
    status: "Recent",
    timeago: "5min",
    author: "Kavien Bruyena",
    content: ` Sustainability and Green Living\n\nWith growing environmental concerns and a heightened focus on sustainability, green living has become a prominent trend in the real estate market. From energy-efficient features to eco-friendly building materials, buyers are increasingly prioritizing properties that minimize their environmental footprint.\n\nBringing the Outdoors Inside\n\nAs cities grow denser, architects are incorporating biophilic design to reconnect urban dwellers with nature. This blog explores how integrating natural elements into built environments is reshaping modern architecture.Sustainability and Green Living\n\nWith growing environmental concerns and a heightened focus on sustainability, green living has become a prominent trend in the real estate market. From energy-efficient features to eco-friendly building materials, buyers are increasingly prioritizing properties that minimize their environmental footprint.\n\nBringing the Outdoors Inside\n\nAs cities grow denser, architects are incorporating biophilic design to reconnect urban dwellers with nature. This blog explores how integrating natural elements into built environments is reshaping modern architecture.`,
    src: "/common/buildings.jpg",
  },
  {
    id: 3,
    title: "Explore Verified Listings",
    date: "August 1, 2025",
    status: "Recent",
    timeago: "5min",
    author: "Kavien Bruyena",
    content: ` Sustainability and Green Living\n\nWith growing environmental concerns and a heightened focus on sustainability, green living has become a prominent trend in the real estate market. From energy-efficient features to eco-friendly building materials, buyers are increasingly prioritizing properties that minimize their environmental footprint.\n\nBringing the Outdoors Inside\n\nAs cities grow denser, architects are incorporating biophilic design to reconnect urban dwellers with nature. This blog explores how integrating natural elements into built environments is reshaping modern architecture.Sustainability and Green Living\n\nWith growing environmental concerns and a heightened focus on sustainability, green living has become a prominent trend in the real estate market. From energy-efficient features to eco-friendly building materials, buyers are increasingly prioritizing properties that minimize their environmental footprint.\n\nBringing the Outdoors Inside\n\nAs cities grow denser, architects are incorporating biophilic design to reconnect urban dwellers with nature. This blog explores how integrating natural elements into built environments is reshaping modern architecture.`,
    src: "/common/buildings.jpg",
  },
];

export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = useMemo(
    () => blogs.find((b) => b.id === Number(params.id)),
    [params.id]
  );

  if (!blog) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div
        className="relative h-60 flex flex-col justify-center items-center rounded-2xl text-Arambo-White p-5 mb-5"
        style={{
          background:
            "linear-gradient(180deg, #000B26 0%, #00123C 19.69%, #032471 70.33%, #0C39A3 86.64%, #0041D9 100%)",
        }}
      >
        <h1 className="text-center h1 mb-8">{blog.title}</h1>
      </div>
      <div className="max-w-6xl mx-auto bg-white rounded-2xl mt-20">
        <img
          src={blog.src}
          alt={blog.title}
          className="w-full h-72 object-cover rounded-xl mb-6"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <span className="text-left">
            <span className="feature text-Arambo-Black">Read Time</span>
            <br />
            <span className="h5 text-Arambo-Text">{blog.timeago}</span>
          </span>
          <span className="text-center">
            <span className="feature text-Arambo-Black">Publish Date</span>
            <br />
            <span className="h5 text-Arambo-Text">{blog.date}</span>
          </span>
          <span className="text-right">
            <span className="feature text-Arambo-Black">Written By</span>
            <br />
            <span className="h5 text-Arambo-Text">{blog.author}</span>
          </span>
        </div>
        <div className="max-w-none">
          {blog.content.split("\n\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
      <section className="py-24 bg-Arambo-White">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="h2 text-Arambo-Black mb-12">
            Explore More Blogs <br /> and Insights
          </h2>
          <div className="grid grid-cols-3 gap-5">
            {blogs.map((blog) => (
              <BlogDetails key={blog.id} {...blog} href={blog.id.toString()} />
            ))}
          </div>
        </div>
      </section>
      <section className="space-y-12 py-24 flex justify-center bg-Arambo-White mt-20">
        <KnowYourProperty />
      </section>
    </div>
  );
}
