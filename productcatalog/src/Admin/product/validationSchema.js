import { object, string, number, boolean } from "yup";
export const validationSchema = object({
  productName: string().required().max(100),
  productDescription: string().required().max(500),
  productImage: string().required(),
  productPrice: number().required().positive().integer(),
  colorId: number().required().positive().integer(),
  brandId: number().required().positive().integer(),
  categoryId: number().required().positive().integer(),
  usingStatusId: number().required().positive().integer(),
  productOffer: boolean().required(),
});
