import { useFormik } from "formik";

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    return (
        <form>
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
        </form>
    );
};

export default Form;
