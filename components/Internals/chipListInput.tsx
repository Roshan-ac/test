import useChipList from "@/hooks/useChipList";
import { useState } from "react";
import Chip from "./chip";

const ChipListInput = ({ data }: { data: any }) => {
  const {
    // filteredItems,
    selectedItems,
    // addToSelectionWithId,
    removeFromSelection,
    searchQuery,
    updateSearchParams,
    isDeleting,
    handleInputKeyDown,
    highlightedIndex,
  } = useChipList(data);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputFocus = () => {
    setIsModalOpen(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsModalOpen(false), 200);
  };
console.log(selectedItems)
  return (
    <div className="inline-flex-wrap h-min max-h-min w-full items-center rounded-md bg-tertiaryBackground px-4 pb-3 pt-2 align-top">
      {selectedItems.map((item, index) => (
        <Chip
          label={item.value}
          key={index}
          avatarUrl=""
          hoveredCardContent=""
          id={item.id}
          onDismiss={removeFromSelection}
          selected={isDeleting && index === selectedItems.length - 1}
        />
      ))}
      <div className="inline-flex overflow-hidden">
        {/* {isModalOpen && (
          <div className="custom-scrollbar absolute max-h-96 translate-y-11 overflow-y-scroll rounded-md bg-purple-100">
   
          </div>
        )} */}
        <input
          autoFocus={true}
          value={searchQuery}
          className="flex-1 rounded-lg border-none bg-transparent p-0 px-4 py-2 text-white placeholder-white shadow-none focus:outline-none focus:ring-0"
          placeholder="Add more pincode..."
          onChange={updateSearchParams}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
        />
      </div>
    </div>
  );
};

export default ChipListInput;
