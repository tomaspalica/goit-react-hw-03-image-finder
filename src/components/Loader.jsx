import { Audio } from 'react-loader-spinner'
import BarLoader from "react-spinners/BarLoader";

export const Loader = ({loading}) => (
   
    <BarLoader
    
    height={4}
    width={100}
    color="#36d7b7"
    loading={loading} />
    
)