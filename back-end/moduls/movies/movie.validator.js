const yup = require("yup");

exports.categoryValidator = yup.object({
  title: yup
    .string("لطفا نام دسته بندی را وارد کنید")
    .required()
    .min(3)
    .max(44),
  href: yup.string().required().min(3).max(44),
});
