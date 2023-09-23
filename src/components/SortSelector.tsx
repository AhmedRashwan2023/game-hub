import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSordOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectSordOrder, selectedOrder }: Props) => {
  const sortOrder = [
    { label: "Relevence", value: "" },
    { label: "Date Added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release Date", value: "-release" },
    { label: "Populatiry", value: "-metacirtic" },
    { label: "Average Rating", value: "-rating" },
  ];

  const SelectedOrderLabel = sortOrder.find(
    (order) => order.value === selectedOrder
  );
  return (
    <div style={divStyle}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} width="250px">
          {SelectedOrderLabel?.label
            ? `Order by: ${SelectedOrderLabel?.label}`
            : "Order By: Relevence"}
        </MenuButton>
        <MenuList>
          {sortOrder.map((order) => (
            <MenuItem
              key={order.value}
              value={order.value}
              onClick={() => onSelectSordOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortSelector;

const divStyle = {
  paddingBottom: "20px",
};
