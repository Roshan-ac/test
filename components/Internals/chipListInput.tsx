"use client";
import useChipList from "@/hooks/useChipList";
import { Dispatch, SetStateAction, useState } from "react";
import Chip from "./chip";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { Progress } from "../ui/progress";

const ChipListInput = ({
  data,
  vendorId,
  setProgress,
  setIsLoading,
}: {
  data: any;
  vendorId: string;
  setProgress: Dispatch<SetStateAction<number>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}) => {
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

  const router = useRouter();
  const ShowProgress = () => {
    setIsLoading(true);
    setProgress(8);
    setTimeout(() => setProgress(32), 500);
    setTimeout(() => setProgress(52), 500);
    setTimeout(() => setProgress(67), 500);
    setTimeout(() => setProgress(79), 500);
    setTimeout(() => setProgress(94), 500);
    setTimeout(() => setProgress(100), 500);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleInputBlur = async () => {};

  const handleSubmit = async () => {
    console.log(selectedItems);
    const pincodes = selectedItems.map((item) => {
      return item.value;
    });

    const res = await fetch("/api/assignPincodesToVendor", {
      method: "POST",
      body: JSON.stringify({
        vendorid: vendorId,
        pincodes: pincodes,
      }),
    });
    const result = await res.json();
    if (result.success) {
      ShowProgress();
      setIsLoading(false)
      toast({
        title: "Success",
        description: <p className=" text-green-500">{result.message}</p>,
      });
      router.refresh();
    } else {
      setIsLoading(false)
      toast({
        title: "Unable to Update",
        description: <p className=" text-[#dd9999]">{result.message}</p>,
      });
    }
  };

  return (
    <>
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
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
          />
        </div>
      </div>
      <Button
        disabled={selectedItems.length < 1}
        onClick={() => {
          handleSubmit();
        }}
        className=" !h-max rounded-none !bg-[#82C43C] px-8"
      >
        Update
      </Button>
    </>
  );
};

export default ChipListInput;
