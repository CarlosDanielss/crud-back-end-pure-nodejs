export class UserValidations {
  static name(name) {
    const regex = /^([a-zA-Zç~^`´]+(?:\s[a-zA-Zç~^`´]+)*)$/;
    const adjustedName = name.toLowerCase().trim();
    return {
      value: adjustedName,
      isValid: regex.test(adjustedName),
    };
  }

  static email(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const adjustedEmail = email.trim();
    return {
      value: adjustedEmail,
      isValid: regex.test(adjustedEmail),
    };
  }

  static password(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*.;:?])[a-zA-Z\d!@#$%*.;:?]{8,20}$/;
    const adjustedPassword = password.trim();
    return {
      value: adjustedPassword,
      isValid: regex.test(adjustedPassword),
    };
  }
}
