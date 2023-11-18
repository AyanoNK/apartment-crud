import * as yup from "yup";

const projectSchema = yup
  .object({
    name: yup.string().required(),
    address: yup.number().positive().integer().required(),
    link: yup.number().positive().integer().required(),
    brochure: yup.number().positive().integer().required(),
    gym: yup.boolean().required(),
    social_spaces: yup.number().required(),
    bbq: yup.boolean().required(),
    game_salon: yup.boolean().required(),
    court: yup.boolean().required(),
    delivery_date: yup.string().required(),
    status: yup.string().required(),
    separation_amount: yup.number().required(),
    company: yup.string().required(),
    city: yup.string().required(),
    contact_name: yup.string().required(),
    contact_phone: yup.number().required(),
    pool: yup.boolean().required(),
  })
  .required();

export default projectSchema;
