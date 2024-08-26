import OneInputField from "./OneInputField";
import { useForm } from "react-hook-form";

function ProfileForm() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      className="flex flex-col px-[90px] mt-[50px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" flex justify-between">
        <div className="flex flex-col gap-[24px]">
          <OneInputField
            type="text"
            placeholder="Name"
            register={register}
            name="name"
            required="name is required"
            pattern={{
              value: /^[A-Za-z\s]+$/,
              message: "Please enter a valid string",
            }}
            error={errors?.name?.message}
          />
          <OneInputField
            type="text"
            placeholder="Surname"
            register={register}
            name="surname"
            required="surname is required"
            pattern={{
              value: /^[A-Za-z\s]+$/,
              message: "Please enter a valid string",
            }}
            error={errors?.surname?.message}
          />
          <OneInputField
            type="text"
            placeholder="Phone"
            register={register}
            name="phone"
            required="phone is required"
            pattern={{
              value: /^[0-9]+$/,
              message: "Please enter a valid number",
            }}
            error={errors?.phone?.message}
          />
          <OneInputField
            type="text"
            placeholder="Address"
            register={register}
            name="address"
            required="address is required"
            error={errors?.address?.message}
          />
        </div>
        <div className="flex flex-col gap-[24px]">
          <OneInputField
            type="text"
            placeholder="Language"
            register={register}
            name="language"
            required="language is required"
            error={errors?.language?.message}
          />
          <OneInputField
            type="email"
            placeholder="Gmail"
            register={register}
            name="gmail"
            required="gmail is required"
            pattern={{
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/,
              message: "Gmail must end with .com",
            }}
            error={errors?.gmail?.message}
          />
          <OneInputField
            type="text"
            placeholder="New Password"
            register={register}
            name="newPassword"
            required="new password is required"
            error={errors?.newPassword?.message}
          />
          <OneInputField
            type="text"
            placeholder="Repeat New Password"
            register={register}
            name="repetedPassword"
            required="repeat new password is required"
            error={errors?.repetedPassword?.message}
          />
        </div>
      </div>
      <button className="w-[200px] h-[54px] rounded-[15px] bg-[#613994] mt-[70px] text-[#fff] self-end">
        Save Changes
      </button>
    </form>
  );
}

export default ProfileForm;
