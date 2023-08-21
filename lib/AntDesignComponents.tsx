"use client";
import {
  Input,
  ConfigProvider,
  Button,
  Checkbox,
  Radio,
  Steps,
  Menu,
  Dropdown,
  Select,
  Divider,
  Pagination,
  Carousel,
  Progress,
  Rate,
  Modal,
  Tabs,
  InputProps,
  ButtonProps,
  CheckboxProps,
  RadioProps,
  RadioGroupProps,
  StepsProps,
  MenuProps,
  DropdownProps,
  SelectProps,
  DividerProps,
  PaginationProps,
  CarouselProps,
  ProgressProps,
  RateProps,
  ModalProps,
  TabsProps,
} from "antd";
import { TextAreaProps } from "antd/es/input";
import { ReactNode } from "react";

type children = {
  children: ReactNode;
};

export const CustomInput = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: {},
    }}
  >
    <Input {...props} style={{ padding: 8 }} />
  </ConfigProvider>
);

export const CustomSearchInput = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: {},
    }}
  >
    <Input
      {...props}
      style={{
        padding: 8,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
      }}
    />
  </ConfigProvider>
);

export const CustomPasswordInput = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: {},
    }}
  >
    <Input.Password {...props} style={{ padding: 8 }} />
  </ConfigProvider>
);

export const CustomTextArea = ({ ...props }: TextAreaProps) => (
  <ConfigProvider>
    <Input.TextArea {...props} />
  </ConfigProvider>
);

export const CustomButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider theme={{ token: {} }}>
    <Button {...props} />
  </ConfigProvider>
);

export const SecondaryButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider theme={{ token: { colorPrimary: "#E5F6F3" } }}>
    <Button {...props} />
  </ConfigProvider>
);

export const DangerButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider theme={{ token: { colorPrimary: "#FEEEE5" } }}>
    <Button {...props} />
  </ConfigProvider>
);

export const AuthButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider theme={{ token: { controlHeight: 45 } }}>
    <Button {...props} />
  </ConfigProvider>
);

export const HeaderButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider theme={{ token: { controlHeight: 40 } }}>
    <Button {...props} />
  </ConfigProvider>
);

export const CustomCheckBox = ({ ...props }: CheckboxProps) => (
  <ConfigProvider
    theme={{
      token: {
        borderRadius: 4,
        padding: 24,
      },
    }}
  >
    <Checkbox {...props} />
  </ConfigProvider>
);

export const RadioButton = ({ ...props }: RadioProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#C4C4C4",
      },
      components: {
        Radio: {
          buttonBg: "transparent",
          buttonCheckedBg: "#C4C4C4",
          buttonSolidCheckedColor: "#C4C4C4",
          colorBorder: "#C4C4C4",
          controlHeight: 42,
          padding: 30,
        },
      },
    }}
  >
    <Radio.Button
      style={{
        borderRadius: 30,
        textAlign: "center",
        color: "#616A6A",
        width: "100%",
      }}
      {...props}
    />
  </ConfigProvider>
);

export const RadioGroup = ({ ...props }: RadioGroupProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#C4C4C4",
      },
      components: {
        Radio: {
          buttonBg: "transparent",
          buttonCheckedBg: "#C4C4C4",
          buttonSolidCheckedColor: "#C4C4C4",
          colorBorder: "#C4C4C4",
          controlHeight: 42,
        },
      },
    }}
  >
    <Radio.Group
      {...props}
      style={{
        borderRadius: 30,
        textAlign: "center",
        color: "#616A6A",
      }}
    />
  </ConfigProvider>
);

export const ThemeRadioButton = ({ ...props }: RadioProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
      },
      components: {
        Radio: {
          // buttonBg: "transparent",
          buttonCheckedBg: "#010886",
          buttonSolidCheckedColor: "#010886",
          colorBorder: "#010886",
          // controlHeight: 42,
          // padding: 10,
        },
      },
    }}
  >
    <Radio.Button
      style={{
        borderRadius: 8,
        textAlign: "center",
        color: "#000",
        width: "100%",
      }}
      {...props}
    />
  </ConfigProvider>
);

export const ThemeRadioGroup = ({ ...props }: RadioGroupProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
      },
      components: {
        Radio: {
          buttonBg: "transparent",
          buttonCheckedBg: "#010886",
          buttonSolidCheckedColor: "#010886",
          colorBorder: "#010886",
          // controlHeight: 42,
          // padding: 10,
        },
      },
    }}
  >
    <Radio.Group
      {...props}
      style={{
        borderRadius: 8,
        textAlign: "center",
        // color: "#010101",
      }}
    />
  </ConfigProvider>
);

export const CustomSteps = ({ ...props }: StepsProps) => (
  <ConfigProvider>
    <Steps {...props} />
  </ConfigProvider>
);

export const CustomMenu = ({ ...props }: MenuProps) => (
  <ConfigProvider
    theme={{
      token: { fontSize: 16, colorBgContainer: "#F8F8FD" },
      components: {
        Menu: {},
      },
    }}
  >
    <Menu {...props} />
  </ConfigProvider>
);

export const CustomDropDown = ({
  children,
  ...props
}: DropdownProps | children) => (
  <ConfigProvider>
    <Dropdown {...props}>{children}</Dropdown>
  </ConfigProvider>
);

export const CustomSelect = ({ ...props }: SelectProps) => (
  <ConfigProvider>
    <Select
      {...props}
      bordered={false}
      style={{
        width: 280,
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: "#D6DDEB",
      }}
      className="hover:border-colorPrimary"
      optionFilterProp="children"
      filterOption={(input, option) =>
        (option?.label?.toString() ?? "").includes(input)
      }
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toString()
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toString().toLowerCase())
      }
    />
  </ConfigProvider>
);

export const CustomDivider = ({ ...props }: DividerProps) => (
  <ConfigProvider theme={{ token: {}, components: { Divider: {} } }}>
    <Divider
      style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
      {...props}
    />
  </ConfigProvider>
);

export const CustomPagination = ({ ...props }: PaginationProps) => (
  <ConfigProvider
    theme={{
      components: {},
    }}
  >
    <Pagination {...props} />
  </ConfigProvider>
);

export const CustomCarousel = ({ ...props }: CarouselProps) => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#010886" },
      components: { Carousel: { colorPrimaryActive: "#FFF" } },
    }}
  >
    <Carousel {...props} centerMode>
      {props.children}
    </Carousel>
  </ConfigProvider>
);

export const CustomProgress = ({ ...props }: ProgressProps) => (
  <ConfigProvider theme={{ token: { colorPrimary: "#56CDAD" } }}>
    <Progress {...props} />
  </ConfigProvider>
);

export const CustomRate = ({ ...props }: RateProps) => (
  <ConfigProvider theme={{ token: { colorPrimary: "#56CDAD" } }}>
    <Rate {...props} />
  </ConfigProvider>
);

export const CustomModal = ({ ...props }: ModalProps) => (
  <ConfigProvider>
    <Modal centered maskClosable={false} footer={null} {...props}>
      {props.children}
    </Modal>
  </ConfigProvider>
);

export const CustomTabs = ({ ...props }: TabsProps) => (
  <ConfigProvider theme={{ components: { Tabs: { inkBarColor: "#010886" } } }}>
    <Tabs {...props} />
  </ConfigProvider>
);
