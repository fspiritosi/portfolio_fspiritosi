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
    <div className="divide-y divide-gray-100 dark:divide-gray-700 w-96">
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
        <Form className="flex flex-col w-full">
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="John" clasName='w-full'/>

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <label htmlFor="subjet">Asunto</label>
          <Field id="subjet" name="subjet" placeholder="Doe" />

          <label htmlFor="content">Mensaje</label>
          <Field id="content" name="content" as="textarea" placeholder="Doe" />

          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Contact