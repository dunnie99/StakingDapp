import { ConnectButton } from '@rainbow-me/rainbowkit';
import StakingABI from '../utils/abi/StakingABI.json'
import { useContractRead } from 'wagmi';

export const Home = () => {

    const { data:holderName, isError, isLoading } = useContractRead({
        address: '0x7c9210c291E00c2030116FcC930D071BBEC5C30f',
        abi: StakingABI,
        functionName: 'getStakeHolders',
    })
    const { data:tokenContracts, isError: tokenContractsError, isLoading: tokenContractsLoading } = useContractRead({
        address: '0x7c9210c291E00c2030116FcC930D071BBEC5C30f',
        abi: StakingABI,
        functionName: 'getStakeTokens',
    })


    return (
            <main className='flex flex-col items-center w-full m-auto gap-4'>
                <ConnectButton />
                <div className="p-2 m-auto">
                    <h2 className="text-2xl font-semibold mb-8">Stake Holders</h2>
                    {holderName.map((e, i) => <div key={i} className=''> {e} </div>)}
                </div>
                <div className="p-2 mx-auto">
                    <h2 className="text-2xl font-semibold mt-8">Token Addresses</h2>
                    {tokenContracts.map((e, i) => <div key={i} className=''> {e} </div>)}
                </div>
            </main>
    )
}