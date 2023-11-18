import { UseFormRegister, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import projectSchema from "./schemas/forms/projectSchema";
import FormError from "./components/FormError";

// const projectSchema = yup
//   .object({
//     name: yup.string().required(),
//     address: yup.number().positive().integer().required(),
//     link: yup.number().positive().integer().required(),
//     brochure: yup.number().positive().integer().required(),
//     gym: yup.boolean().required(),
//     social_spaces: yup.number().required(),
//     bbq: yup.boolean().required(),
//     game_salon: yup.boolean().required(),
//     court: yup.boolean().required(),
//     delivery_date: yup.string().required(),
//     status: yup.string().required(),
//     separation_amount: yup.number().required(),
//     company: yup.string().required(),
//     city: yup.string().required(),
//     contact_name: yup.string().required(),
//     contact_phone: yup.number().required(),
//     pool: yup.boolean().required(),
//   })
//   .required();

type ProjectFormProps = {
  name: string;
  address: number;
  link: number;
  brochure: number;
  gym: boolean;
  social_spaces: number;
  bbq: boolean;
  game_salon: boolean;
  court: boolean;
  delivery_date: string;
  status: string;
  separation_amount: number;
  company: string;
  city: string;
  contact_name: string;
  contact_phone: number;
  pool: boolean;
};

export default function ProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(projectSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-sm">Name</label>
          <input {...register("name")} />
          <FormError>{errors.name?.message}</FormError>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Address</label>
          <input {...register("address")} />
          <FormError>{errors.address?.message}</FormError>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Link</label>
          <input {...register("link")} />
          <FormError>{errors.link?.message}</FormError>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Brochure</label>
          <input {...register("brochure")} />
          <FormError>{errors.brochure?.message}</FormError>
        </div>
        <div className="flex flex-row gap-2">
          <label className="text-sm">Gym</label>
          <input {...register("gym")} type="checkbox" />
          <FormError>{errors.gym?.message}</FormError>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Social spaces</label>
          <input {...register("social_spaces")} />
          <FormError>{errors.social_spaces?.message}</FormError>
        </div>
        <div className="flex flex-row gap-2">
          <label className="text-sm">BBQ</label>
          <input {...register("bbq")} type="checkbox" />
          <FormError>{errors.bbq?.message}</FormError>
        </div>
        <div className="flex flex-row gap-2">
          <label className="text-sm">Game salon</label>
          <input {...register("game_salon")} type="checkbox" />
          <FormError>{errors.game_salon?.message}</FormError>
        </div>
        <div className="flex flex-row gap-2">
          <label className="text-sm">Court</label>
          <input {...register("court")} type="checkbox" />
          <FormError>{errors.court?.message}</FormError>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Delivery date</label>
          <input {...register("delivery_date")} />
          <FormError>{errors.delivery_date?.message}</FormError>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Status</label>
          <input {...register("status")} />
          <FormError>{errors.status?.message}</FormError>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Separation amount</label>
          <input {...register("separation_amount")} />
          <FormError>{errors.separation_amount?.message}</FormError>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Company</label>
          <input {...register("company")} />
          <FormError>{errors.company?.message}</FormError>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">City</label>
          <input {...register("city")} />
          <FormError>{errors.city?.message}</FormError>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Contact name</label>
          <input {...register("contact_name")} />
          <FormError>{errors.contact_name?.message}</FormError>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Contact phone</label>
          <input {...register("contact_phone")} />
          <FormError>{errors.contact_phone?.message}</FormError>
        </div>
        <div className="flex flex-row gap-2">
          <label className="text-sm">Pool</label>
          <input {...register("pool")} type="checkbox" />
          <FormError>{errors.pool?.message}</FormError>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
