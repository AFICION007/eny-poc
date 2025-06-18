import { createContext } from "react";

const coverageContext = createContext({
    selectedVertical: '',
    setSelectedVertical:()=>{},
    selectedSector:'',
    setSelectedSector:()=>{},
    query: '',
    setQuery: () => {},
})



export default coverageContext;