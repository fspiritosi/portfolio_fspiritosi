'use client'
import { Formik, FormikHelpers, Form, Field } from "formik"
import { useState } from "react";


interface Values {
  name: string,
  email: string,
  subjet: string,
  content:string
}

function Contact() {

  const [message, setMessage] = useState({})

  const hanldeSubmit = (values:Values) => {
    setMessage(values)
  }

  return (
    <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-1 md:gap-6 lg:gap-10 pt-8 md:w-[32rem] lg:w-[50rem]">
      <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-13">
        Enviame un mensaje
      </h3>
      <div className="border-white rounded">
        <Formik
          initialValues={{ name: "", email: "", subjet: "", content: "" }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form className="flex flex-col justify-center align-middle gap-5  p-8 transition ">
            <label
              htmlFor="name"
              className="font-extrabold lg:text-2xl sm:text-base md:text-1xl transition"
            >
              Nombre
            </label>
            <Field
              id="name"
              name="name"
              placeholder="Fabricio"
              className="rounded-lg font-medium enabled:hover:border-teal-400 enabled:hover:border-4 disabled:text-opacity-75 transition dark:bg-gray-800"
            />

            <label
              htmlFor="email"
              className="font-extrabold lg:text-2xl sm:text-base md:text-1xl transition"
            >
              Email
            </label>
            <Field
              id="email"
              name="email"
              placeholder="ejemplo@ejemplo.com"
              type="email"
              className="rounded-lg font-medium enabled:hover:border-teal-400 enabled:hover:border-4 disabled:text-opacity-75 transition dark:bg-gray-800"
            />

            <label
              htmlFor="subjet"
              className="font-extrabold lg:text-2xl sm:text-base md:text-1xl transition"
            >
              Asunto
            </label>
            <Field
              id="subjet"
              name="subjet"
              placeholder="Asunto"
              className="rounded-lg font-medium enabled:hover:border-teal-400 enabled:hover:border-4 disabled:text-opacity-75 transition dark:bg-gray-800"
            />

            <label
              htmlFor="content"
              className="font-extrabold lg:text-2xl sm:text-base md:text-1xl transition"
            >
              Mensaje
            </label>
            <Field
              id="content"
              name="content"
              as="textarea"
              placeholder="Mensaje"
              className="rounded-lg font-medium enabled:hover:border-teal-400 enabled:hover:border-4 disabled:text-opacity-75 dark:bg-gray-800"
            />

            <button
              type="submit"
              className="md:rounded-full xs:rounded-lg dark:bg-teal-700 p-4 rounded-lg max-w-sm mx-auto my-0 w-96 mt-4 text-xl font-extrabold dark:hover:bg-teal-500 bg-teal-600 hover:bg-teal-400"
            >
              Enviar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Contact