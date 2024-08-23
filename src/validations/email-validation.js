export function emailValidation(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const adjustedEmail = email.trim();
  return regex.test(adjustedEmail);
}
