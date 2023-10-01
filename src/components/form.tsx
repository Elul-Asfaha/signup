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
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const [showPassword, setShowPassword] = useState(false);
    return (
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5'>
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
                            Must contain an uppercase characters
                        </p>
                        <p className='text-gray-500'>
                            Must contain a lowercase characters
                        </p>
                    </div>
                </div>
            </div>
            <button
                type='submit'
                className='bg-[#00C575] font-semibold uppercase rounded-md w-full text-center py-2'
            >
                create a free account
            </button>
        </form>
    );
};

export default Form;
