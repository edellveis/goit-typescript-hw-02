import * as Yup from "yup";

const phoneNumberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const nameRegex = /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ'-]+$/;
export const ContactProfileShema = Yup.object().shepe({
  name: Yup.string()
    .min(3, "To Short!")
    .max(50, "To long!")
    .required("Name is required")
    .matches(nameRegex, "Invalid name"),
  number: Yup.string()
    .required("Phone is required")
    .matches(phoneNumberRegex, "Invalid phone number"),
});
