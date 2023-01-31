import { object, string } from "yup";

export const validationSchema=object({
email:string().required().email(),
password:string().required().min(8).max(20)
})