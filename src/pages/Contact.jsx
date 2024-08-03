import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
import { validateForm } from "./Validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import toast from "react-hot-toast";
import SparklesCore from "../components/ui/sparkles";

const Contact = () => {
  const form = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(form);
  const [formError, setFormError] = useState(form);

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
    setFormError({ ...formError, [id]: validateForm(id, value) });
  };
  const handleSubmit = async () => {
    let valid = true;
    let newFormError = {};
    for (let key in formData) {
      const error = validateForm(key, formData[key]);
      if (error.length > 0) {
        newFormError[key] = error;
        valid = false;
      }
    }
    setFormError(newFormError);
    if (valid) {
      setFormData(form);
      toast.success("Submitted Successfully!", { duration: 4000 });
      await addDoc(collection(db, "portfolio"), formData);
    } else {
      toast.error("Some error occurred!", { duration: 4000 });
    }
  };

  const btn = useMatches({
    xsm: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });
  return (
    <div
      className='px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0 mb-10 mt-20 font-mono'
      id='Contact'
    >
      <div className='h-[8rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md'>
        <h1 className='md:text-4xl text-2xl lg:text-7xl font-bold text-center text-white relative z-20'>
          Contact
        </h1>
        <div className='w-[40rem] h-40 relative'>
          {/* Gradients */}
          <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
          <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
          <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
          <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

          {/* Core component */}
          <SparklesCore
            background='transparent'
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className='w-96 h-10 ml-32'
            particleColor='#FFFFFF'
          />
        </div>
      </div>
      <div
        data-aos='flip-left'
        data-aos-duration='800'
        className='w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl sm-mx:p-4'
      >
        <div className=' text-3xl flex gap-2 items-center text-white font-semibold sm-mx:text-2xl xs-mx:text-xl'>
          Let's Connect
          <IconTopologyStar3 className='w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7' />
        </div>
        <FloatingInput
          id='name'
          name='Name'
          value={formData.name}
          handleChange={handleChange}
          error={formError.name}
        />
        <FloatingInput
          id='email'
          name='Email'
          value={formData.email}
          handleChange={handleChange}
          error={formError.email}
        />
        <FloatingInput
          id='phone'
          name='Phone Number'
          value={formData.phone}
          handleChange={handleChange}
          error={formError.phone}
        />
        <FloatingInput
          id='message'
          name='Message'
          value={formData.message}
          handleChange={handleChange}
          error={formError.message}
        />
        <Button
          fullWidth
          onClick={handleSubmit}
          rightSection={<IconArrowRight size={20} />}
          className='!text-bgColor !font-bold '
          variant='filled'
          size={btn}
          radius='lg'
          color='#64FFDA'
        >
          Send
        </Button>
      </div>
    </div>
  );
};
export default Contact;
