import { Spin } from 'antd'
import { LoadingOutlined } from "@ant-design/icons"

export const Spinner = () => {
    return (
        <>
            <Spin size='large' indicator={<LoadingOutlined style={{ fontSize: 24 }} className='text-[#010886]  z-[1000]' spin />} />
        </>
    )
}
