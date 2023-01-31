import { object, string } from "yup";

export const validationSchema = object({
  brandName: string().required(),
});
