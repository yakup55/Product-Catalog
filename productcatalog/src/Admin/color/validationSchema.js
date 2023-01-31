import { object, string } from "yup";
export const validationSchema = object({
  colorName: string().required(),
});
