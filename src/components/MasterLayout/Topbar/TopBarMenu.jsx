import React from "react";

import { Dropdown, Input, Typography, theme } from "antd";
import { userCredentialsFromName } from "../../../utils/helperFunctions";
import { IconContainer, TopBarMenuContainer } from "./style";
const { useToken } = theme;

const { Text } = Typography;
const name = "Ravi Verma";

const TopBarMenu = () => {
  const { token } = useToken();

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const items = [];

  return (
    <TopBarMenuContainer>
      <Input
        placeholder="Search Products"
        style={{ width: 200, marginRight: 100 }}
      />
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        trigger={["click"]}
        dropdownRender={(menu) => (
          <div style={contentStyle}>
            <div
              style={{
                padding: "10px",
              }}
            >
              <Text ellipsis style={{ maxWidth: "128px" }}>
                {name}
              </Text>
            </div>

            {menu}
          </div>
        )}
      >
        <IconContainer>{userCredentialsFromName(name)}</IconContainer>
      </Dropdown>
    </TopBarMenuContainer>
  );
};

export default TopBarMenu;
