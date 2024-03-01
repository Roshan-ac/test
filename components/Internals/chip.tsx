import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { ReactNode, useState } from "react";

const Chip = ({
  selected,
  id,
  avatarUrl,
  label,
  onDismiss,
  hoveredCardContent,
  classname,
}: {
  id: string;
  selected?: boolean;
  avatarUrl?: string;
  label: string;
  onDismiss?: (id: string) => Promise<void> | void;
  hoveredCardContent?: ReactNode;
  classname?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        selected ? "bg-gray-500" : " bg-primaryBackground",
        "relative px-3 m-1 gap-2 inline-flex h-8 w-auto cursor-pointer items-center rounded-full align-middle shadow",
        classname,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="ml-2 tracking-wide flex-grow text-sm font-medium text-white">{label}</p>

      {onDismiss && (
        <button
          onClick={() => onDismiss(id)}
          className="flex rounded-full bg-transparent p-0 align-middle text-lg text-gray-400 hover:scale-105 hover:border-transparent hover:text-gray-600"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default Chip;
