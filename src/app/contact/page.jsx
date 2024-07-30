"use client";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setLoading(true);
      setError("");
      setSuccessMessage("");
      try {
        const response = await fetch("https://hernsmed.onrender.com/emails", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        if (response.ok) {
          setSuccessMessage(result.message);
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError("Internal Server Error: " + error.message);
      } finally {
        setSubmitting(false);
        resetForm();
        setLoading(false);
      }
    },
  });

  return (
    <div className="mb-14">
      <div className="p-16 bg-blue-500">
        <h3 className="lg:text-3xl text-lg text-white text-center">
          OUR Contact
        </h3>
      </div>

      <div className=" mx-auto flex justify-center  items-center h-fit py-6">
        <div className="flex lg:flex-row flex-col gap-4 lg:text-center text-center justify-between lg:w-8/12 w-11/12">
          <span>
            <h1 className="font-bold text-lg  text-blue-600">Address:</h1>
            <p>17424 NE 138th St Redmond, WA 98052</p>
          </span>
          <span>
            <h1 className="font-bold text-lg text-blue-600">Phone:</h1>
            <p>+360-218-2621</p>
          </span>
          <span>
            <h1 className="font-bold text-lg text-blue-600">Email:</h1>
            <p>Stevendbest19@gmail.com</p>
          </span>
        </div>
      </div>

      <div className=" p-4 w-full">
        <div className="flex lg:flex-row flex-col gap-6 justify-around w-full p-6">
          <div className="lg:w-5/12  w-full">
            <div className="text-center mb-8">
              <h1 className="text-2xl text-blue-600 font-bold">Contact Form</h1>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col w-full gap-4"
            >
              <div className="flex flex-col w-full">
                <label htmlFor="fullName">Full Name</label>
                <input
                  className="h-14 border-2 px-4"
                  type="text"
                  name="fullName"
                  value={formik.values.fullName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <p
                  className={
                    formik.errors.fullName
                      ? "text-red-400 text-xs pb-4"
                      : "pb-4"
                  }
                >
                  {formik.touched.fullName && formik.errors.fullName
                    ? formik.errors.fullName
                    : ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full h-14 border-2 px-4"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                <p
                  className={
                    formik.errors.email ? "text-red-400 text-xs pb-4" : "pb-4"
                  }
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""}
                </p>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="message">Message</label>
                <span className="border-2 border-gray-200">
                  <textarea
                    className="w-full h-24 px-4"
                    name="message"
                    value={formik.values.message}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </span>
                <p
                  className={
                    formik.errors.message ? "text-red-400 text-xs pb-4" : "pb-4"
                  }
                >
                  {formik.touched.message && formik.errors.message
                    ? formik.errors.message
                    : ""}
                </p>
              </div>
              <button
                className="bg-blue-500 w-32 h-12 rounded-sm  text-white submit-button"
                type="submit"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              {error && <p className="text-red-500">{error}</p>}
              {successMessage && (
                <p className="text-green-500">{successMessage}</p>
              )}
            </form>
          </div>
          <div className="lg:w-5/12  w-full shadow-lg rounded-md" id="map">
            <iframe
              style={{ height: "100%", width: "100%", borderRadius: "8px" }}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=17424%20NE%20138th%20St%20Redmond,%20WA%2098052&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
