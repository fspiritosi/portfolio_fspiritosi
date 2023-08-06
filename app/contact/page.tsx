'use client'
import { Formik, FormikHelpers, Form, Field } from "formik"

interface Values {
  name: string,
  email: string,
  subjet: string,
  content:string
}

function Contact() {
  return (
    <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-1 md:gap-6 lg:gap-10 pt-8 md:w-[32rem] lg:w-[50rem]">
      <h3 className="font-extrabold lg:text-4xl sm:text-2xl md:text-3xl">
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
          <Form className="flex flex-col justify-center align-middle gap-5 border-2 border-teal-500 rounded-lg p-8 transition ">
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
              className="rounded-lg font-medium enabled:hover:border-teal-400 enabled:hover:border-4 disabled:text-opacity-75 transition"
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
              className="rounded-lg font-medium enabled:hover:border-teal-400 enabled:hover:border-4 disabled:text-opacity-75 transition "
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
              className="rounded-lg font-medium enabled:hover:border-teal-400 enabled:hover:border-4 disabled:text-opacity-75 transition"
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
              className="rounded-lg font-medium enabled:hover:border-teal-400 enabled:hover:border-4 disabled:text-opacity-75"
            />

            <button
              type="submit"
              className="md:rounded-full xs:rounded-lg bg-teal-500 p-4 rounded-lg max-w-sm mx-auto my-0 w-96 "
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