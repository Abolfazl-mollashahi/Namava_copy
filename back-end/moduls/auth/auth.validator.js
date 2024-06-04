const yup = require("yup");

const loginValidator = yup.object({
  email: yup.string().email().required("فیلد ایمیل اجباری است"),
  password: yup.string().required("لطفا رمز عبور خود را وارد کنید"),
});

const registerValidator = yup.object({
  name: yup
    .string()
    .required("لطفا نام خود را وارد کنید")
    .min(3, "نام شما باید حداقل 3 کاراکتر داشته باشد")
    .max(45),
  email: yup
    .string()
    .email("لطفا ایمیل معتبر وارد کنید")
    .required("فیلد ایمیل اجباری است"),
  password: yup
    .string()
    .required()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .max(45),
  phone: yup.string().required(),
});

module.exports = { registerValidator, loginValidator };
