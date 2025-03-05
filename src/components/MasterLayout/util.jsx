import ProductsCompareIcon from "../icons/ProductCompareIcon";
import ProductsIcon from "../icons/ProductsIcon";
import { CategoryText, MenuText } from "./style";

const matchUrlLevels = (currentUrl, itemUrl) => {
  const currentUrlLevels = currentUrl.split("/");
  const itemUrlLevels = itemUrl.split("/");

  return itemUrlLevels.every(
    (level, index) => level === currentUrlLevels[index]
  );
};

export const getItemByKey = (value, flag, items) => {
  for (const item of items) {
    if (flag === "url") {
      const itemUrl = item["url"];
      const currentUrl = value;

      if (currentUrl === itemUrl) {
        return item;
      }

      if (!item.children && matchUrlLevels(currentUrl, itemUrl)) {
        return item;
      }
    } else {
      const itemKey = item["key"];
      const currentKey = value;

      if (currentKey === itemKey) {
        return item;
      }
    }

    if (item?.children?.length > 0) {
      const nestedItem = getItemByKey(value, flag, item.children);
      if (nestedItem) {
        return nestedItem;
      }
    }
  }

  return null;
};

export const items = [
  {
    id: 100,
    key: "productsGroup",
    label: <CategoryText>Products</CategoryText>,
    type: "group",
    title: "Products",
    children: [
      {
        id: 101,
        label: <MenuText style={{ color: "inherit" }}>Details</MenuText>,
        icon: <ProductsIcon />,
        key: "products",
        keyPath: ["products"],
        url: "/products",
        title: "Products",
      },
    ],
  },
  {
    id: 100,
    key: "operations",
    label: <CategoryText>Operations</CategoryText>,
    type: "group",
    title: "Operations",
    children: [
      {
        id: 201,
        label: (
          <MenuText style={{ color: "inherit" }}>Compare Products</MenuText>
        ),
        key: "compare-products",
        keyPath: ["compare-products"],
        url: "/compare-products",
        icon: <ProductsCompareIcon />,
      },
    ],
  },
];
