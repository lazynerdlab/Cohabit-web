"use client";

import {
  Input,
  ConfigProvider,
  Button,
  Checkbox,
  Radio,
  InputProps,
  ButtonProps,
  CheckboxProps,
  RadioProps,
  RadioGroupProps,
} from "antd";

export const CustomInput = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: {},
    }}
  >
    <Input {...props} style={{ padding: 8 }} />
  </ConfigProvider>
);

export const CustomButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider theme={{ token: { controlHeight: 45 } }}>
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
  <ConfigProvider>
    <Radio.Button {...props} />
  </ConfigProvider>
);

export const RadioGroup = ({ ...props }: RadioGroupProps) => (
  <ConfigProvider>
    <Radio.Group {...props} />
  </ConfigProvider>
);
