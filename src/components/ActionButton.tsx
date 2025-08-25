import { ArrowRight } from "lucide-react";

type ActionButtonProps = {
  label: string;

  startIcon: React.ReactNode;
  GoToActionIcon?: boolean;
  isActive: boolean;
  onClick?: () => void;
};

const ActionButton = ({
  label,

  startIcon,
  GoToActionIcon,
  isActive,
  onClick,
}: ActionButtonProps) => {
  return (
    <button
      className={`rounded-3xl max-w-[400px] w-full flex justify-between items-center body-lg label-16 py-8 px-6 cursor-pointer ${
        isActive
          ? "bg-Arambo-Accent text-Arambo-White"
          : "bg-Arambo-White text-Arambo-Black"
      }`}
      onClick={onClick}
    >
      <span className="flex gap-2 items-center">
        {startIcon}
        {label}
      </span>
      {GoToActionIcon && <ArrowRight size={24} />}
    </button>
  );
};

export default ActionButton;
