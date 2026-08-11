import { contentAbout } from "./Elements.js";
import { stateCard } from "./stateCard.js";

const setSearchResult = (data) => {
  stateCard(data);
  if (!data || data.length === 0) {
    contentAbout.innerHTML = "";
    return;
  }

  let result = "";

  data.map((item) => {
    result += ` <div class="col">
              <img src="${item.avatar_url}" alt="${item.login} profile picture">
              <h3>${item.login}</h3>
            </div>`;
  });

  contentAbout.innerHTML = result;
};

export default setSearchResult;

