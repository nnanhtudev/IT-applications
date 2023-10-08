const inputFistName = document.querySelector("#input-firstname");
const inputLastName = document.querySelector("#input-lastname");
const inputUsername = document.querySelector("#input-username");
const inputPassword = document.querySelector("#input-password");
const inputPasswordConfirm = document.querySelector("#input-password-confirm");
function getDataUser() {
  let firstName = inputFistName.value;
  let lastName = inputLastName.value;
  let username = inputUsername.value;
  let password = inputPassword.value;
  let passwordConfirm = inputPasswordConfirm.value;
  return {
    firstName,
    lastName,
    username,
    password,
    passwordConfirm,
  };
}
export default getDataUser;
