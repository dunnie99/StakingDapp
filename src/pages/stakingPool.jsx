import { erc20ABI, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from "react";
import StakingABI from '../utils/abi/StakingABI.json'
import { useParams } from "react-router-dom";

export const stakingPool = () => {
    const [stake, setStake] = useState("");
    const { address } = useParams()


    const { config } = usePrepareContractWrite({
        address: '0x7c9210c291E00c2030116FcC930D071BBEC5C30f',
        abi: StakingABI,
        functionName: "StakeToken",
        args: [
          address,
          stake
        ],
      });
    
      const {data: stakeDetails, isLoading: stakeIsLoading, write: StakeToken} = useContractWrite(config)
  
      const {data: waitForData, isError: errorLoadingData, isLoading: waitisLoading} = useWaitForTransaction({
        //confirmations: 1,
        hash: stakeDetails?.hash,
        onSuccess(waitForData){console.log("success");
      }
        //timeout: 2_000, 
      })


      // const handleSubmit = (e) => {
      //   const handleSubmit = (e) => {
      //     e.preventDefault()
      
      
        
      //     setTimeout(() => {
      //       console.log({address, stake})
      
      //       StakeToken?.()
      //     }, 1000)
      //   }
      
      // }



      // useEffect(() => {
      //   if(stakeDetails) {
      //     console.log(stakeDetails);
      //   }
      // }, [stakeDetails])



      // return(
      //   <div>

      //     <ConnectionButton />

      //     <form>
      //       <div className="">
      //         <label>StakeToken Address</label>
      //         <input
      //         type="text"
      //         placeholder="Name1"
      //         onChange={(e) => setContenders1(e.target.value)}
      //         />
      //       </div>

      //       <div className="">
      //         <label>Amount to stake</label>
      //         <input
      //         type="number"
      //         placeholder="Set token amount"
      //         onChange={(e) => setTokenToStake(e.target.value)}
      //         />
      //       </div>


      //       <button type="submit">
      //       { 
      //       waitisLoading ? "Loading...": 
      //       errorLoadingData ? "Error": "submit"
      //       }
      //       </button>
      //     </form>
      //   </div>
      // )
    



      
























}