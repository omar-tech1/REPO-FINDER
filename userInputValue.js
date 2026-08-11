export const usersInputElement = () => {
  let activeElement = document.querySelector(".active");
  if (activeElement.value === "user") {
    return true;
  } else {
    return false;
  }
};