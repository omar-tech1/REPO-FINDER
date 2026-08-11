//create function => performSearch(searchInput, usersInputElement)
// call performSearch inside Button eventListener
/*

    performSearch
   [x] * fetch data from url
    [ok] if OK then show data in the page
    * if not, show error message
*/
import {
  inputElement,
  button,
  usersElement,
  organizationsInputElement,
  contentAbout,
} from "./scripts/Elements.js";
import { performSearch } from "./performSearch.js";
import { stateCard } from "./stateCard.js";
import { usersInputElement } from "./userInputValue.js";


organizationsInputElement.addEventListener("click", () => {
  organizationsInputElement.classList.add("active");
  usersElement.classList.remove("active");
});
usersElement.addEventListener("click", () => {
  usersElement.classList.add("active");
  organizationsInputElement.classList.remove("active");
});

button.addEventListener("click",(e)=>{
  e.preventDefault();
  performSearch(inputElement.value,usersInputElement());
})
