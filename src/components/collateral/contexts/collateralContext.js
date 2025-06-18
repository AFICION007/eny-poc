import { createContext } from "react";

const collateralContext = createContext({
    selectedVertical: '',
    setSelectedVertical:()=>{},
    selectedSector:'',
    setSelectedSector:()=>{},
    selectedCompany:'',
    setSelectedCompany:()=>{},
    selectedIndustry:'',
    setSelectedIndustry:()=>{},
    selectedCollateral:'',
    setSelectedCollateral:()=>{},
    query: '',
    setQuery: () => {},
})



export default collateralContext;