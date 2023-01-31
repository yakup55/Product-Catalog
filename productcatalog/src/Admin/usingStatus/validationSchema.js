import { string, object } from "yup";
export const validationSchema = object({
  name: string().required(),
});
