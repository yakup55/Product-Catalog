import { object, string, number } from "yup";
export const validationSchema = object({
  detailExplanation: string().required(),
  productId: number().required().positive().integer(),
});
