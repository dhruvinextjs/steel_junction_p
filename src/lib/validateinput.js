const ValidationSchema = (isPasswordRequired) => {
  const signupSchema = yup.object({
    phone: yup.string().required("phone is required"),
    passcode: isPasswordRequired
      ? yup.string().required("Password is required")
      : yup.string(),
  });
  return {
    signupSchema,
  };
};
export default ValidationSchema;