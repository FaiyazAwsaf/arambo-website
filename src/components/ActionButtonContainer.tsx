"use client";

import { Home } from "lucide-react";
import ActionButton from "./ActionButton";
import { useState } from "react";

const ActionButtonContainer = ({
  defaultSelected,
}: {
  defaultSelected: "buy" | "rent";
}) => {
  const [activeButton, setActiveButton] = useState<"rent" | "buy">(
    defaultSelected
  );
  return (
    <>
      <ActionButton
        label="RENT"
        GoToActionIcon
        startIcon={<Home size={24} />}
        isActive={activeButton === "rent"}
        onClick={() => setActiveButton("rent")}
      />

      {/* BUY button */}
      <ActionButton
        label="BUY"
        startIcon={<Home size={24} />}
        isActive={activeButton === "buy"}
        onClick={() => setActiveButton("buy")}
      />
    </>
  );
};

export default ActionButtonContainer;
