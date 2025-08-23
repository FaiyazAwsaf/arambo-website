interface AboutListingCardProps {
  num: number;
  title: string;
  text: string;
  src: string;
}

const AboutListingCard = ({ num, title, text, src }: AboutListingCardProps) => {
  return (
    <div
      className="sticky py-3 top-20 z-10 w-full "
      style={{ top: `${100 + num * 25}px` }}
    >
      <div className="rounded-2xl bg-Arambo-Background p-2 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Content */}
        <div className="p-12 flex flex-col">
          <h2 className="text-4xl flex-1 font-semibold text-Arambo-Accent opacity-50">
            0{num}.
          </h2>
          <div>
            <h3 className="h3 text-Arambo-Black mb-4">{title}</h3>
            <p className="p-base text-Arambo-Text">{text}</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center rounded-2xl">
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutListingCard;
