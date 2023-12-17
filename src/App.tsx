import "./App.css";
import { Input } from "./components/Input";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import errorIcon from "./assets/images/icon-error.svg";

type FormValue = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const AgentSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name cannot be empty"),
  lastName: Yup.string().required("Last Name cannot be empty"),
  email: Yup.string()
    .email("Looks like this is not an email")
    .required("Looks like this is not an email"),
  password: Yup.string()
    .required("Password cannot be empty")
    .min(8, "password must be at least 8 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,20}$/,
      "must contain at least 1 letter and 1 number"
    ),
});

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(".header", {
      duration: 2,
      text: "Learn to code by watching others",
      ease: "none",
    });
    gsap.to(".text", {
      duration: 8,
      text: "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.",
      ease: "none",
    });
  }, []);

  const onSubmitForm = (values: any) => {
    return values;
  };

  const { handleSubmit, handleChange, values, errors } = useFormik<FormValue>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: AgentSchema,
    onSubmit: (value) => onSubmitForm(value),
  });

  return (
    <div className="Container">
      <div className="App-header text-white">
        <h1 className="header mb-6">Welcome...</h1>
        <p className="text"></p>
      </div>
      <div className="mt-10 medq:mt-6 w-fit medq:w-full medq:mb-5">
        <div className="mb-7 text-center text-white bg-deep-blue h-14 shadow-4xl font-400">
          <p className="pt-4 flex gap-1 medq:flex-col justify-center">
            <span>
              <span className="bold">Try it free 7 days</span> then $20/mo.
            </span>
            <span>thereafter</span>
          </p>
        </div>
        <form
          className="bg-white p-7 shadow-4xl border rounded-xl"
          onSubmit={handleSubmit}
        >
          <div>
            {errors?.firstName ? (
              <div className="mb-2">
                <div className=" border-2 border-red relative font-600">
                  <Input
                    className="text-indent"
                    type="password"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={values.firstName}
                  />
                  <img
                    src={errorIcon}
                    className="h-5 w-5 absolute top-3 iconerror"
                  />
                </div>
                <div className=" text-10 italic font-['Poppins700'] text-red text-end mt-2">
                  {errors.firstName}
                </div>
              </div>
            ) : (
              <div>
                <div className="border border-light-blue mb-7 font-600">
                  <Input
                    className="text-indent"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    required
                    name="firstName"
                    value={values.firstName}
                  ></Input>
                </div>
              </div>
            )}
          </div>
          <div>
            {errors?.lastName ? (
              <div className="mb-2">
                <div className="border-2 border-red relative font-600">
                  <Input
                    className="text-indent"
                    type="password"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={values.lastName}
                  />
                  <img
                    src={errorIcon}
                    className="h-5 w-5 absolute top-3 iconerror"
                  />
                </div>
                <div className="text-10 italic font-['Poppins700'] text-red text-end mt-2">
                  {errors.lastName}
                </div>
              </div>
            ) : (
              <div>
                <div className="border border-light-blue mb-7 font-600">
                  <Input
                    className="text-indent"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={values.lastName}
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            {errors?.email ? (
              <div className="mb-2">
                <div className="border-2 border-red relative font-600">
                  <Input
                    className="text-indent"
                    type="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    name="email"
                    value={values.email}
                  />
                  <img
                    src={errorIcon}
                    className="h-5 w-5 absolute top-3 iconerror"
                  />
                </div>
                <div className="text-10 italic font-['Poppins700'] text-red text-end mt-2">
                  {errors?.email}
                </div>
              </div>
            ) : (
              <div className="border border-light-blue mb-7 font-600 flex">
                <Input
                  className="text-indent"
                  type="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  name="email"
                  value={values.email}
                />
              </div>
            )}
          </div>
          <div>
            {errors?.password ? (
              <div className="mb-2">
                <div className="border-2 border-red relative font-600">
                  <div className="flex justify-between">
                    <Input
                      className="text-indent"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                      name="password"
                      value={values.password}
                    />
                    <img
                      src={errorIcon}
                      className="h-5 w-5 top-3 absolute iconerror "
                    />
                  </div>
                </div>
                <div className="text-10 italic font-['Poppins700'] text-red text-end mt-2">
                  {errors?.password}
                </div>
              </div>
            ) : (
              <div className="border border-light-blue mb-7 font-600">
                <Input
                  className="text-indent"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={values.password}
                />
              </div>
            )}
          </div>
          <button className=" text-center border border-green hover:shadow-4xl rounded-md text-white bg-green w-full mb-7 font-500 h-12">
            CLAIM YOUR FREE TRIAL
          </button>
          <div className=" text-center">
            <span className=" text-light-blue Notice">
              By clicking the button, you are agreeing to our
              <span className="text-red bold">
                {""}
                {""} Terms <br /> and Services
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
