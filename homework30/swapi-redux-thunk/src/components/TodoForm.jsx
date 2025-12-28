import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { fetchData } from "../store/rootReducer";
import { motion, AnimatePresence } from "framer-motion";

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
        dispatch(fetchData(values.value.trim()));
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <div className="form__wrapper">
            <span className="base-url">
              https://swapi.py4e.com/api/
            </span>

            <Field
              name="value"
              className="form__input"
              placeholder="people/1/"
              validate={validateField}
            />

            <AnimatePresence>
                {errors.value && touched.value && (
                  <motion.div
                    className="form__error"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {errors.value}
                  </motion.div>
                )}
            </AnimatePresence>

          </div>

          <button type="submit" className="form__btn">
            Get info
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
