import {
  Input,
  InputNumber,
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
  Upload,
  DatePicker,
  Collapse,
  FloatButton,
  InputProps,
  InputNumberProps,
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
  UploadProps,
  DatePickerProps,
  FloatButtonProps,
} from "antd";
import type { CollapseProps } from "antd";
import { TextAreaProps } from "antd/es/input";
import { ReactNode } from "react";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
type children = {
  children: ReactNode;
};

const primaryConfig = { fontFamily: ubuntu.style.fontFamily };

export const CustomInput = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
    }}
  >
    <Input {...props} style={{ padding: 8 }} />
  </ConfigProvider>
);

export const CustomInlineInput = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
    }}
  >
    <Input {...props} />
  </ConfigProvider>
);

export const CustomInputNumber = ({ ...props }: InputNumberProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
    }}
  >
    <InputNumber {...props} />
  </ConfigProvider>
);

export const CustomSearchInput = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
    }}
  >
    <Input.Search
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
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
    }}
  >
    <Input.Password {...props} style={{ padding: 8 }} />
  </ConfigProvider>
);

export const CustomTextArea = ({ ...props }: TextAreaProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
      },
    }}
  >
    <Input.TextArea {...props} />
  </ConfigProvider>
);

export const CustomButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
    }}
  >
    <Button {...props} />
  </ConfigProvider>
);

export const SecondaryButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#E5F6F3", borderRadius: 5, ...primaryConfig },
    }}
  >
    <Button {...props} />
  </ConfigProvider>
);

export const SuccessButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#1AD48E", borderRadius: 5, ...primaryConfig },
    }}
  >
    <Button {...props} />
  </ConfigProvider>
);

export const DangerButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#FEEEE5", borderRadius: 5, ...primaryConfig },
    }}
  >
    <Button {...props} />
  </ConfigProvider>
);

export const AuthButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        controlHeight: 45,
        ...primaryConfig,
      },
    }}
  >
    <Button {...props} />
  </ConfigProvider>
);

export const HeaderButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        controlHeight: 40,
        ...primaryConfig,
      },
    }}
  >
    <Button {...props} />
  </ConfigProvider>
);

export const CustomCheckBox = ({ ...props }: CheckboxProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 4,
        padding: 24,
        ...primaryConfig,
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
        borderRadius: 5,
        ...primaryConfig,
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
        borderRadius: 5,
        ...primaryConfig,
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
      style={{
        borderRadius: 30,
        textAlign: "center",
        color: "#616A6A",
      }}
      {...props}
    />
  </ConfigProvider>
);

export const CustomRadio = ({ ...props }: RadioProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#4640DE",
        borderRadius: 5,
        ...primaryConfig,
      },
    }}
  >
    <Radio {...props} />
  </ConfigProvider>
);

export const ThemeRadioButton = ({ ...props }: RadioProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
      components: {
        Radio: {
          buttonCheckedBg: "#010886",
          buttonSolidCheckedColor: "#010886",
          colorBorder: "#010886",
        },
      },
    }}
  >
    <Radio.Button
      {...props}
      style={{
        borderRadius: 8,
        textAlign: "center",
        color: "#000",
        width: "100%",
        ...props.style,
      }}
    />
  </ConfigProvider>
);

export const ThemeRadioGroup = ({ ...props }: RadioGroupProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
      components: {
        Radio: {
          buttonBg: "transparent",
          buttonCheckedBg: "#010886",
          buttonSolidCheckedColor: "#010886",
          colorBorder: "#010886",
        },
      },
    }}
  >
    <Radio.Group
      {...props}
      style={{
        borderRadius: 8,
        textAlign: "center",
      }}
    />
  </ConfigProvider>
);

export const CustomSteps = ({ ...props }: StepsProps) => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#010886", borderRadius: 5, ...primaryConfig },
    }}
  >
    <Steps {...props} />
  </ConfigProvider>
);

export const CustomMenu = ({ ...props }: MenuProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        fontSize: 16,
        colorBgContainer: "#F8F8FD",
        ...primaryConfig,
      },
      components: {
        Menu: {},
      },
    }}
  >
    <Menu {...props} />
  </ConfigProvider>
);

export const ChatMenu = ({ ...props }: MenuProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        fontSize: 16,
        colorBgContainer: "#FFF",
        ...primaryConfig,
      },
      components: {
        Menu: {
          itemActiveBg: "#010886",
          itemHeight: 55,
          itemSelectedBg: "#010886",
          itemSelectedColor: "#FFF",
          itemColor: "#32475C99",
        },
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
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#010886", borderRadius: 5, ...primaryConfig },
    }}
  >
    <Dropdown {...props}>{children}</Dropdown>
  </ConfigProvider>
);

export const CustomSelect = ({ ...props }: SelectProps) => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#010886", borderRadius: 5, ...primaryConfig },
    }}
  >
    <Select
      {...props}
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
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#010886", borderRadius: 5, ...primaryConfig },
      components: { Divider: {} },
    }}
  >
    <Divider
      style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
      {...props}
    />
  </ConfigProvider>
);

export const CustomPagination = ({ ...props }: PaginationProps) => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#010886", borderRadius: 5, ...primaryConfig },
    }}
  >
    <Pagination {...props} />
  </ConfigProvider>
);

export const CustomCarousel = ({ ...props }: CarouselProps) => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#010886", borderRadius: 5, ...primaryConfig },
      components: { Carousel: { colorPrimaryActive: "#FFF" } },
    }}
  >
    <Carousel {...props} centerMode>
      {props.children}
    </Carousel>
  </ConfigProvider>
);

export const CustomProgress = ({ ...props }: ProgressProps) => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#56CDAD", borderRadius: 5, ...primaryConfig },
    }}
  >
    <Progress {...props} />
  </ConfigProvider>
);

export const CustomRate = ({ ...props }: RateProps) => (
  <ConfigProvider
    theme={{ token: { colorPrimary: "#56CDAD", ...primaryConfig } }}
  >
    <Rate {...props} />
  </ConfigProvider>
);

export const CustomModal = ({ ...props }: ModalProps) => (
  <ConfigProvider
    theme={{
      token: { colorPrimary: "#010886", borderRadius: 5, ...primaryConfig },
    }}
  >
    <Modal centered maskClosable={false} footer={null} {...props}>
      {props.children}
    </Modal>
  </ConfigProvider>
);

export const CustomTabs = ({ ...props }: TabsProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
      components: { Tabs: { inkBarColor: "#010886" } },
    }}
  >
    <Tabs {...props} />
  </ConfigProvider>
);

export const CustomUpload = ({ ...props }: UploadProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
    }}
  >
    <Upload.Dragger {...props} />
  </ConfigProvider>
);

export const CustomDatePicker = ({ ...props }: DatePickerProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
    }}
  >
    <DatePicker {...props} />
  </ConfigProvider>
);

export const CustomCollapse = ({ ...props }: CollapseProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
    }}
  >
    <Collapse {...props} />
  </ConfigProvider>
);

export const CustomFloatButton = ({ ...props }: FloatButtonProps) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#010886",
        borderRadius: 5,
        ...primaryConfig,
      },
    }}
  >
    <FloatButton {...props} />
  </ConfigProvider>
);
