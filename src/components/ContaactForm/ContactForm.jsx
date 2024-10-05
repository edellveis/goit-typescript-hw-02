import React from "react";
import style from "./ConctactForm.module.css";
import { Formik, Form, Field } from "formik";

export default function ContactForm({ initia_lValues }) {
  initial_Values = {
    name: "",
    phone: "",
  };
  return (
    <Formik initialValues={{ initia_lValues }} onSubmit={() => {}}>
      <Form className={style.form}>
        <label className={style.label}>
          <span>Name</span>
          <Field className={style.input} type="text" name="name" />
        </label>
        <label className={style.label}>
          <span>Phone</span>
          <Field className={style.input} type="text" name="phone" />
        </label>
        <button type="submit" className={style.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
