import { erc20ABI, useContractReads } from "wagmi"

export const TokenDashboard = () => {
    const def = {
        address: "0xF455eB0C273b8E48A0415D34072179Aa25611791",
        abi: erc20ABI,
    }
    const { data, isError, isLoading } = useContractReads({
        contracts: [
            {
            ...def,
            functionName: 'symbol'
            },
            {
            ...def,
            functionName: 'name'
            },
            {
            ...def,
            functionName: 'decimal'
            }
        ]
    }
    )
    return (
        <div>
            {data.forEach((e, i) => {
                return (
                    <div> {e}</div>
                )
            })}
        </div>
    )
}