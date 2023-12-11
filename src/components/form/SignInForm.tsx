"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';


const SignInForm = () => {

    const FormSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  });

  const { register, handleSubmit } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const signInData = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false
      });

      if (signInData && signInData.error) {
        const errorMessage = 'incorrect email or password'
        setError(errorMessage);
      } else {
        router.push('/signin');
      }
    } catch (error) {
      console.error('Error during signIn:', error);
    }
  };
  
    return (
        <div className='grid sm:grid-cols-2 mx-5 my-5'>
            <div className=' flex justify-center min-w-fit mt-0 sm:w-1/3 mx-auto flex-col my-8'>
                <h1 className='text-3xl sm:text-4xl mb-5 text-slate-700 text-center font-semibold'>DIVE INTO THE WAVE!</h1>
                <label
                    htmlFor="email"
                    className="block my-2 text-base font-medium leading-6 text-slate-700"
                >
                    Email
                </label>
                <input 
                    type="email"
                    {...register('email')}
                    placeholder='iloveasianwave@yahoo.com'
                    className="mt-1 px-3 py-5 block min-w-full sm:w-1/2 placeholder-custom-purple placeholder-opacity-50 border-2 shadow-sm border-custom-purple rounded-full"
                />

                <label
                    htmlFor="password"
                    className="block my-2 text-base font-medium leading-6 text-slate-700"
                >
                    Password
                </label>
                <input 
                    type="password"
                    {...register('password')}
                    placeholder='*********'
                    className="mt-1 px-3 py-5 block min-w-full sm:w-1/2 placeholder-custom-purple placeholder-opacity-50 border-2 shadow-sm border-custom-purple rounded-full"
                />
                {error && <p>{error}</p>}
                <button
                    onClick={handleSubmit(onSubmit)}
                    type='submit'
                    className='mt-10 px-3 py-5 block min-w-full sm:w-1/2 shadow-sm m1-1 font-medium text-white bg-custom-purple rounded-full'
                >
                    Sign In
                </button>
                <p className='mt-5 text-center text-slate-700'>or</p>
                <button
                    className='mt-5 px-3 py-5 block min-w-full sm:w-1/2 shadow-sm border-2 border-custom-purple m1-1 font-medium text-custom-purple bg-slate-100 rounded-lg'
                >
                    Continue with Google
                </button>
                <p className='mt-5 text-center text-slate-700'>Don&apos;t have an account?
                    <span>
                        <Link 
                            className='text-custom-purple font-semibold'
                            href={'/signup'}> Sign Up
                        </Link>
                    </span>
                </p>
            </div>
            <div className='min-w-fit md:w-3/5 mx-5 overflow-hidden hidden sm:flex'>
                <Image
                    src="/images/wallpapers/asianwave_logo.png"
                    width={1000}
                    height={500}
                    alt="Asianwave Logo"
                    className='sm:object-cover'
                />
            </div>
        </div>
    )
}

export default SignInForm