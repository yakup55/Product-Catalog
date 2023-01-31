import { object, string } from "yup";
export const validationSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  userName: string().required(),
  email: string().email().required(),
  password: string().required().min(8).max(20),
});
