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
                .max(15, "Must be a vali email address")
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
                        value={formik.values.name}
                        className='w-full bg-[#0B1B32] outline-[#203858] py-2 px-3 rounded-md'
                    />
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <label>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className='w-full bg-[#0B1B32] outline-[#203858] py-2 px-3 rounded-md'
                    />
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <label>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className='w-full bg-[#0B1B32] outline-[#203858] py-2 px-3 rounded-md'
                    />
                    <p>Must be atleast 8 characters</p>
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
