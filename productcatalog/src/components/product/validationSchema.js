import { boolean, number, object } from "yup";

export const validationSchema=object({
    isAccepted:boolean().default(false).required(),
    offerPrice: number().required().positive().integer(),
    productId: number().required().positive().integer()
})