import { useReducer, useState, useMemo } from "react";
import {
  selectedItemsReducer,
  ActionTypes,
  SelectedItem,
} from "../reducers/chipListReducer";

import { PincodeInterface } from "@/interfaces/pincode";

const useChipList = (data: PincodeInterface[]) => {
  const [selectedItems, dispatch] = useReducer(selectedItemsReducer, []);

  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // const filteredItems = useMemo(() => {
  //   return data.filter(
  //     (val) =>
  //       !selectedItems.includes(val) &&
  //       (searchQuery === "" || val.value.includes(searchQuery)),
  //   );
  // }, [searchQuery, selectedItems]);

  async function removeFromSelection(id: string) {
    dispatch({ type: ActionTypes.REMOVE_ITEM, payload: id });
    setSearchQuery("");
  }

  async function addToSelectionWithItem(item: SelectedItem) {
    dispatch({ type: ActionTypes.ADD_ITEM, payload: item });
    setSearchQuery("");
  }
  // async function addToSelectionWithId(id: string) {
  //   const item = filteredItems.find((val) => val.id === id);
  //   if (item) {
  //     addToSelectionWithItem(item);
  //   }
  // }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && searchQuery === "") {
      if (!isDeleting) {
        setIsDeleting(true);
      } else {
        removeFromSelection(selectedItems[selectedItems.length - 1].id);
        setIsDeleting(false);
      }
    } else {
      setIsDeleting(false);
      if (e.key === "Enter") {
        const pincode = searchQuery.trim();

        const emailItem: PincodeInterface = { id: pincode, value: pincode };
        addToSelectionWithItem(emailItem);
      }
    }
  }
  async function updateSearchParams(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
    if (
      e.target.value !== "" ||
      e.nativeEvent.type !== "deleteContentBackward"
    ) {
      setIsDeleting(false);
    }
  }

  return {
    selectedItems,
    // filteredItems,
    highlightedIndex,
    // addToSelectionWithId,
    removeFromSelection,
    searchQuery,
    updateSearchParams,
    isDeleting,
    handleInputKeyDown: handleInputKeyDown,
  };
};

export default useChipList;
