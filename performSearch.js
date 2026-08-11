
// import { showErrorUI } from "./setCardErrorMassage";
import setSearchResult from "./setSearchResult.js";
import { loadingState, stateCard } from "./stateCard.js";

const USER_API = "https://api.github.com/search/users?q=";
export const performSearch = (searchTerm, isUserSelected) => {
    stateCard(true);
     if (!searchTerm.trim()) {
        
        setSearchResult([]);
        stateCard();
        return;
    }
loadingState(true);
const typeQuery= isUserSelected?"+type:user":"+type:org";
    fetch(`${USER_API}${searchTerm}${typeQuery}`)
    .then((result)=>result.json())
    .then((response)=>setSearchResult(response.items))
    .finally( ()=>{
        loadingState(false)});
};
