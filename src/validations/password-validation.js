export function passwordValidation(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*.;:?])[a-zA-Z\d!@#$%*.;:?]{8,20}$/;
  const adjustedPassword = password.trim();
  return console.log(regex.test(adjustedPassword));
}
