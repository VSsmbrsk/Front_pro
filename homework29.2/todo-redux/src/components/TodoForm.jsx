import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";

function validateField(value) {
  let error;
  if (!value) {
    error = "Required!";
  } else if (value.length < 5) {
    error = "Too short!";
  }
  return error;
}

export const TodoForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ value: "" }}
      onSubmit={(values, { resetForm }) => {
        const text = values.value.trim();
        if (!text) return;

        dispatch(addTodo(text));
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
          Add
        </button>
      </Form>
        )}
    </Formik>
  );
}

export default TodoForm;

