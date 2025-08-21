interface PropertyDetailsCardProps {
  label: string;
  src: string;
  content: string;
}

const PropertyDetailsCard = ({
  label,
  src,
  content,
}: PropertyDetailsCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs text-Arambo-Text uppercase">{label}</span>
      <div className="flex gap-2.5 items-center">
        <img className="p-3 bg-Arambo-White rounded-lg" src={src} alt="" />
        <p className="font-semibold text-xl">{content}</p>
      </div>
    </div>
  );
};

export default PropertyDetailsCard;
