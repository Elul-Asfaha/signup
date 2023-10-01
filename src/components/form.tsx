import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Must be a valid email address")
                .required("Required"),
            password: Yup.string()
                .max(15, "Must be a password")
                .required("Required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='flex flex-col gap-3'>
                <div className='w-full flex flex-col gap-1'>
                    <label>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className='w-full bg-[#0B1B32] outline-[#203858] py-2 px-3 rounded-md'
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p>{formik.errors.name}</p>
                    )}
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <label>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className='w-full bg-[#0B1B32] outline-[#203858] py-2 px-3 rounded-md'
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p>{formik.errors.email}</p>
                    )}
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <label>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className='w-full bg-[#0B1B32] outline-[#203858] py-2 px-3 rounded-md'
                    />
                    <p>Must be atleast 8 characters</p>
                    {formik.touched.password && formik.errors.password && (
                        <p>{formik.errors.password}</p>
                    )}
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
