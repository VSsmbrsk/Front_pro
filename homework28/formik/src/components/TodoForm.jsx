import { Formik, Form, Field } from "formik";


function validateField(value) {
  let error;
  if (value.length < 5) {
    error = 'Too short!';
  }
  return error;
}

export const TodoForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ value: "" }}
      onSubmit={(values, { resetForm }) => {
        const text = values.value.trim();
        if (!text) return;

        onAdd(text);
        resetForm();
      }}
    >
        {({ errors, touched, isValidating }) => (
      <Form className="form">
        <div className="form__wrapper">
            <Field
            name="value"
            className="form__input"
            placeholder="New task"
            validate={validateField}
        />
        {errors.value && touched.value && <div>{errors.value}</div>}
        </div>

        <button type="submit" className="form__btn">
          Додати
        </button>
      </Form>
        )}
    </Formik>
  );
}

export default TodoForm;
