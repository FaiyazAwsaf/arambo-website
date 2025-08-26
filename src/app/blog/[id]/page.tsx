// "use client";
import BlogDetails from "@/components/BlogDetails";
import KnowYourProperty from "@/components/homepageComponents/KnowYourProperty";
import { notFound } from "next/navigation";

const blogs = [
  {
    id: 1,
    title: "Top Trends Shaping the Real Estate Market in 2024",
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

type Props = {
  params: Promise<{ id: string }>;
};

const BlogDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === Number(id));
  if (!blog) return notFound();

  return (
    <div className="min-h-screen bg-white p-4">
      <div
        className="relative h-94 flex flex-col justify-center items-center rounded-2xl text-Arambo-White p-5 mb-5"
        style={{
          background:
            "linear-gradient(180deg, #000B26 0%, #00123C 19.69%, #032471 70.33%, #0C39A3 86.64%, #0041D9 100%)",
        }}
      >
        <div className="flex items-center gap-4 mb-6 mt-12">
          <p className="px-3 py-1 bg-[#DEE7FC] text-Arambo-Accent rounded-lg inline-block">
            {blog.status}
          </p>
          <p className="text-Arambo-White text-base font-medium">{blog.date}</p>
        </div>

        <div className="w-full flex justify-center">
          <h1 className="h1 mb-8 text-center w-1/2">{blog.title}</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20">
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

        {/* Share options bar */}
        <div className="mt-10 mb-16 bg-Arambo-Background rounded-xl flex items-center justify-between px-6 py-4">
          <span className="feature text-Arambo-Black">Share now:</span>
          <div className="flex items-center gap-4">
            {/* Facebook Share */}
            <a
              href={``}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-Arambo-Accent"
              title="Share on Facebook"
            >
              <img src="/blog/fb.svg" alt="Facebook" width={18} height={18} />
            </a>
            {/* X (Twitter) Share */}
            <a
              href={``}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-Arambo-Accent"
              title="Share on X"
            >
              <img src="/blog/x.svg" alt="X" width={18} height={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-Arambo-Accent"
              title="Share on LinkedIn"
            >
              <img src="/blog/ln.svg" alt="LinkedIn" width={18} height={18} />
            </a>
            {/* Copy link button */}
            <button className="hover:text-Arambo-Accent" title="Copy link">
              <img src="/blog/copy.svg" alt="Copy" width={18} height={18} />
            </button>
          </div>
        </div>
      </div>
      {/* Share options */}
      <section className="py-24 bg-Arambo-White">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="h2 text-Arambo-Black mb-12">
            Explore More Blogs <br /> and Insights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
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
};

export default BlogDetailsPage;
