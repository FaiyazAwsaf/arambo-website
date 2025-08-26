import Link from "next/link";

type BlogDetailsProps = {
  title: string;
  status: string;
  date: string;
  timeago: string;
  href: string;
  src: string;
};

const BlogDetails = ({
  title,
  status,
  date,
  timeago,
  href,
  src,
}: BlogDetailsProps) => {
  return (
    <div className="w-full">
      <div className="w-full h-48 sm:h-64 lg:h-[290px] mb-4 sm:mb-5">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover bg-center rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center">
          <p className="px-3 py-1 bg-[#DEE7FC] text-Arambo-Accent rounded-lg inline-block">
            {status}
          </p>
          <p className="text-Arambo-Text text-base font-medium">{date}</p>
        </div>
        <h5 className="h5 py-2 sm:py-5">{title}</h5>
        <div className="flex w-full justify-between items-center mb-6">
          <p className="text-Arambo-Text text-base font-medium">{timeago}</p>
          <Link
            className="text-Arambo-Accent text-base font-medium"
            href={`/blog/${
              typeof href === "string" && href.startsWith("/blog/") ? "" : ""
            }${
              typeof href === "string" && href.startsWith("/blog/") ? "" : ""
            }${
              (typeof href === "string" && href !== undefined ? href : "") || ""
            }`}
            as={typeof href === "number" ? `/blog/${href}` : undefined}
            passHref
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
