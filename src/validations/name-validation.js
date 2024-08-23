export function nameValidation(name) {
  const regex = /^([a-zA-Zç~^`´]+(?:\s[a-zA-Zç~^`´]+)*)$/;
  const adjustedName = name.toLowerCase().trim();
  return regex.test(adjustedName);
}
