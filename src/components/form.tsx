import { useFormik } from "formik";
import * as Yup from "yup";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { useState } from "react";
const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            terms: false,
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Must be a valid email address")
                .required("Required"),
            password: Yup.string()
                .min(8, "Password must have at least 8 characters")
                .matches(/[0-9]/, "must have atleast 1 number")
                .matches(/[a-z]/, "must have a lowercase character")
                .matches(/[A-Z]/, "must have an uppercase character"),
            terms: Yup.boolean().required(),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const [showPassword, setShowPassword] = useState(false);
    return (
        <form
            onSubmit={formik.handleSubmit}
            className='flex flex-col  h-full gap-5'
        >
            <div className='flex flex-col gap-3'>
                <div className='w-full flex flex-col gap-[6px]'>
                    <label>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className='w-full bg-[#0B1B32] outline-none py-2 px-3 rounded-md'
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className='text-[red]'>{formik.errors.name}</p>
                    )}
                </div>
                <div className='w-full flex flex-col gap-[6px]'>
                    <label>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className='w-full bg-[#0B1B32] outline-none py-2 px-3 rounded-md'
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className='text-[red]'>{formik.errors.email}</p>
                    )}
                </div>
                <div className='w-full flex flex-col gap-[6px]'>
                    <label>Password</label>
                    <div className='flex items-center w-full bg-[#0B1B32]  px-3 rounded-md'>
                        <input
                            type={`${showPassword ? "text" : "password"}`}
                            id='password'
                            name='password'
                            placeholder='Password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className='w-full bg-[#0B1B32] outline-none  py-2'
                        />
                        <div
                            className='text-2xl'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {!showPassword ? <BiShowAlt /> : <BiHide />}
                        </div>
                    </div>

                    {formik.touched.password && formik.errors.password && (
                        <p className='text-[red]'>{formik.errors.password}</p>
                    )}

                    <div className='flex flex-col text-sm'>
                        <p className='text-gray-500'>
                            Must be atleast 8 characters
                        </p>
                        <p className='text-gray-500'>Must contain a number</p>

                        <p className='text-gray-500'>
                            Must contain an uppercase character
                        </p>
                        <p className='text-gray-500'>
                            Must contain a lowercase character
                        </p>
                    </div>
                </div>
                <div className='w-full flex text-sm gap-5'>
                    <input
                        type='checkbox'
                        id='terms'
                        name='terms'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.terms}
                        className=' bg-[#0B1B32] outline-none rounded-md'
                    />
                    <p>
                        By clicking CREATE ACCOUNT you agree to our{" "}
                        <span className='text-blue-600'>Terms of Service</span>{" "}
                        & <span className='text-blue-600'>Privacy Policy</span>
                    </p>
                </div>
            </div>
            <button
                type='submit'
                className='bg-[#00c552] justify-end font-semibold uppercase rounded-md w-full text-center mb-10 py-2'
            >
                create a free account
            </button>
            <div className='flex justify-center w-full gap-5 text-center'>
                <p className='w-fit'>Already have an Account?</p>{" "}
                <button className='text-[#00c552]'>Login</button>
            </div>
        </form>
    );
};

export default Form;
