import { useState } from "react";

export function useSelectableItem() {
  const [isSelected, setIsSelected] = useState(false);

  return {
    isSelected,
    onSelect: () => setIsSelected(true),
    onDeselect: () => setIsSelected(false),
  };
}
