import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import projectSchema from "./schemas/forms/projectSchema";
import FormError from "./components/FormError";
import TextInput from "./components/TextInput";
import { useLocation } from "wouter";
import { useContext } from "react";
import { SupabaseContext } from "./main";

export default function ProjectForm() {
  const [location, setLocation] = useLocation();
  const supabase = useContext(SupabaseContext);

  console.log(location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(projectSchema),
  });

  const onSubmit = async (data: IFormValues) => {
    const { error } = await supabase.from("project").insert([data]).select();

    if (error === null) setLocation("/");

    if (error) console.error(error);
  };

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <TextInput
          label="name"
          register={register}
          required
          formError={errors.name?.message}
        />
        <TextInput
          label="address"
          register={register}
          required
          formError={errors.address?.message}
        />
        <TextInput
          label="link"
          register={register}
          required
          formError={errors.link?.message}
        />
        <TextInput
          label="brochure"
          register={register}
          required
          formError={errors.brochure?.message}
        />
        <div className="flex flex-row gap-2">
          <label className="text-sm">Gym</label>
          <input {...register("gym")} type="checkbox" />
          <FormError>{errors.gym?.message}</FormError>
        </div>
        <TextInput
          label="social_spaces"
          register={register}
          required
          formError={errors.social_spaces?.message}
        />
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
        <TextInput
          label="separation_amount"
          register={register}
          required
          formError={errors.separation_amount?.message}
        />
        <TextInput
          label="company"
          register={register}
          required
          formError={errors.company?.message}
        />
        <TextInput
          label="city"
          register={register}
          required
          formError={errors.city?.message}
        />
        <TextInput
          label="contact_name"
          register={register}
          required
          formError={errors.contact_name?.message}
        />
        <TextInput
          label="contact_phone"
          register={register}
          required
          formError={errors.contact_phone?.message}
        />
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
