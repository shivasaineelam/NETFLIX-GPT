export const checkVaildData = (email, password) => {
  const emailresult = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  if (!emailresult) return "email address is not valid";
  const passwordresult =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!passwordresult) return "password is not valid";

  return null;
};
