import Icon from "@ant-design/icons";
import React from "react";

const ProductsCompareLogo = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_50_2420)">
      <path
        d="M9.16667 11.4583C9.16667 11.1141 8.885 10.8333 8.54167 10.8333H5.41667V13.3333C5.41667 13.7933 5.04333 14.1666 4.58333 14.1666C4.12333 14.1666 3.75 13.7933 3.75 13.3333V10.8333H0.625C0.280833 10.8333 0 11.1141 0 11.4583V19.375C0 19.7191 0.280833 20 0.625 20H8.54167C8.885 20 9.16667 19.7191 9.16667 19.375V11.4583Z"
        fill="currentColor"
      />
      <path
        d="M20 11.4583C20 11.1141 19.7184 10.8333 19.375 10.8333H16.25V13.3333C16.25 13.7933 15.8767 14.1666 15.4167 14.1666C14.9567 14.1666 14.5834 13.7933 14.5834 13.3333V10.8333H11.4584C11.1142 10.8333 10.8334 11.1141 10.8334 11.4583V19.375C10.8334 19.7191 11.1142 20 11.4584 20H19.375C19.7184 20 20 19.7191 20 19.375V11.4583Z"
        fill="currentColor"
      />
      <path
        d="M14.5833 0.625C14.5833 0.281667 14.3016 0 13.9583 0H10.8333V2.5C10.8333 2.96 10.46 3.33333 9.99996 3.33333C9.53996 3.33333 9.16663 2.96 9.16663 2.5V0H6.04163C5.69746 0 5.41663 0.281667 5.41663 0.625V8.54167C5.41663 8.88583 5.69746 9.16667 6.04163 9.16667H13.9583C14.3016 9.16667 14.5833 8.88583 14.5833 8.54167V0.625Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_50_2420">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ProductsCompareIcon = ({ ...props }) => {
  return <Icon component={() => <ProductsCompareLogo />} {...props} />;
};

export default ProductsCompareIcon;
