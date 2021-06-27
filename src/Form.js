import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import "./styles.css";
import "./styles-custom.css";

// Create empty context




const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  
  const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
  // And now we can use these
  const SignupForm = () => {
    return (
      <>
        <h1>Запишись на вакцинацию</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            acceptedTerms: false, // added for our checkbox
            vaccine: '', // added for our select
            city: '',
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Не более 15 символов'),
             
            lastName: Yup.string()
              .max(20, 'Не более 20 символов'),
             
            email: Yup.string()
              .email('неправильный формат'),

            city: Yup.string(),
             
             
            acceptedTerms: Yup.boolean()
              
              .oneOf([true], 'Вы должны согласится с условиями'),
            vaccine: Yup.string()
              .oneOf(
                ['spytnic', 'kovivak', 'epicvakkorona', 'other'],
                'Выбирите тип',
              )
             
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <MyTextInput
              label="Имя"
              name="firstName"
              type="text"
              placeholder="Антон"
            />
  
            <MyTextInput
              label="Фамалия"
              name="lastName"
              type="text"
              placeholder="Макарочкин"
            />
            
  
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="anton29mak@mail.ru"
            />
            <MyTextInput
              label="Город"
              name="city"
              type="text"
              placeholder="Москва"
            />
  
            <MySelect label="Вакцина" name="vaccine">
              <option value="">Название вакцины</option>
              <option value="spytnic">Спутник</option>
              <option value="kovivak">Ковивак</option>
              <option value="epicvakkorona">ЭпиВакКороны</option>
              <option value="other">Другая</option>
            </MySelect>
  
            <MyCheckbox name="acceptedTerms">
              Я согласен с политикой конфиденциальности
            </MyCheckbox>
  
            <button type="submit">Отправить</button>
          </Form>
        </Formik>
      </>
    );
  };


export default SignupForm
