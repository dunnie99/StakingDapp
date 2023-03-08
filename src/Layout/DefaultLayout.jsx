import { Outlet, Link } from "react-router-dom"
import { erc20ABI, useContractReads } from "wagmi"

export const DefaultLayout = () => {

    const { data, isError, isLoading } = useContractReads({
        contracts: [{
            address: "0x62f9D3A871cd539EEF606cF3cdF77c30386128AB",
            abi: erc20ABI,
            functionName: 'name'
        }]
    }
    )
    return (
        <div>
            This is rendering the layout
            <div>
                <Outlet />
            </div>
        </div>
    )
}