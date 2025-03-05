import { theme } from "antd";
const { darkAlgorithm } = theme;

const darkTheme = {
  algorithm: darkAlgorithm,
  token: {
    colorBgBase: "#141414",
    colorBgContainer: "#1F1F1F",
    colorBgElevated: "#262626",
    colorText: "#F0F0F0",
    colorTextSecondary: "#8C8C8C",
    colorBorder: "#303030",
    colorPrimary: "#cb2b83",
    colorSuccess: "#52C41A",
    colorWarning: "#FAAD14",
    colorError: "#FF4D4F",
    borderRadius: 6,
    borderRadiusLG: 8,
    fontFamily: `"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"`,
  },
  components: {
    Layout: {
      headerBg: "#1F1F1F",
      headerColor: "#F0F0F0",
      siderBg: "#1F1F1F",
      bodyBg: "#141414",
    },
    Button: {
      colorPrimary: "#cb2b83",
      colorPrimaryHover: "#d8509a",
      colorPrimaryActive: "#b01e70",
    },
    Table: {
      colorBgContainer: "#1F1F1F",
      headerBg: "#262626",
      headerColor: "#F0F0F0",
      borderColor: "#303030",
      rowHoverBg: "#262626",
    },
    Modal: {
      headerBg: "#1F1F1F",
      contentBg: "#1F1F1F",
      footerBg: "#1F1F1F",
      titleColor: "#F0F0F0",
      footerColor: "#F0F0F0",
    },
    Popover: {
      colorBgElevated: "#262626",
      colorText: "#F0F0F0",
    },
    Notification: {
      colorBgElevated: "#262626",
      colorText: "#F0F0F0",
    },
  },
};

export default darkTheme;
