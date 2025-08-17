import { ArrowRight } from "lucide-react";

type ActionButtonProps = {
  label: string;
  color: string;
  startIcon: React.ReactNode;
  GoToActionIcon?: boolean;
  isActive: boolean;
};

const ActionButton = ({
  label,
  color,
  startIcon,
  GoToActionIcon,
  isActive,
}: ActionButtonProps) => {
  return (
    <button
      className={`rounded-3xl max-w-[400px] w-full flex justify-between items-center body-lg font-medium py-8 px-6 cursor-pointer ${color} ${
        isActive
          ? "bg-Arambo-Accent text-Arambo-White"
          : "bg-Arambo-White text-Arambo-Black"
      }`}
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
