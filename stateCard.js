// لو مفيش نتيجه او النتيجه فاضيه اعرض كارد الايرور
// لو النتيجه موحوده اعرض كارد الترو 

import { loaderSpinner } from "./Elements.js";


export const falseResult= document.querySelector(".false-result");
const trueResult=document.querySelector(".true-result");
const infoResult=document.querySelector(".info-result");

export const loadingState=(isLoading)=>{
    if(isLoading){
  loaderSpinner.classList.remove("loader-spinner-of");
   falseResult.classList.add("content-agtive");
trueResult.classList.add("content-agtive");
infoResult.classList.add("content-agtive");
    }
  else{
  loaderSpinner.classList.add("loader-spinner-of");
  }
}


export const stateCard =(data)=>{
if(!data || data.length === 0){
  loaderSpinner.classList.add("loader-spinner-of");
 falseResult.classList.remove("content-agtive");
trueResult.classList.add("content-agtive");
infoResult.classList.add("content-agtive");
}
else{
 loaderSpinner.classList.add("loader-spinner-of");
 falseResult.classList.add("content-agtive");
trueResult.classList.remove("content-agtive");
infoResult.classList.add("content-agtive");
}
}
