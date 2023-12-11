"use client";

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SignUpForm = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const user = await fetch("/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, email, password
            }),
        });

        if (user.ok) {
            router.push("/");
        } else {
            if (username === "" || email === "" || password === "" || confirmPassword === "") {
                alert("Please fill out all fields");
            }
            else if (user.status === 500) {
                alert("Username/Email already exists");
            }
            else if (username.length < 1) {
                alert("enter username");
            }
            else if (email.length < 1) {
                alert("enter email");
            }
            else if (password.length < 1) {
                alert("enter password");
            }
            else if (password.length < 8) {
                alert("password must be more than 8 characters");
            }
            else if (!email.includes("@")) {
                alert("invalid email");
            }
            else if (username.length > 20) {
                alert("username must be less than 20 characters");
            }
            else if (user.status === 409) {
                alert("Email or username already exists");
            }
            else if (password !== confirmPassword) {
                alert("passwords do not match");
            }
        }
    };

    return (
        <div className='flex items-center justify-center'>
            <div className='flex justify-center min-w-fit md:w-1/4 mx-2 flex-col my-8'>
                <label
                    htmlFor="username"
                    className="block mt-1 text-sm font-medium leading-6 text-gray-900"
                >
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    placeholder='iloveasianwave'
                    className="mt-1 px-3 py-5 block min-w-full sm:w-1/2 placeholder-custom-purple placeholder-opacity-50 border-2 shadow-sm border-custom-purple rounded-full"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label
                    htmlFor="email"
                    className="block mt-1 text-sm font-medium leading-6 text-gray-900"
                >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder='iloveasianwave@yahoo.com'
                    className="mt-1 px-3 py-5 block min-w-full sm:w-1/2 placeholder-custom-purple placeholder-opacity-50 border-2 shadow-sm border-custom-purple rounded-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label
                    htmlFor="password"
                    className="block mt-1 text-sm font-medium leading-6 text-gray-900"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder='*********'
                    className="mt-1 px-3 py-5 block min-w-full sm:w-1/2 placeholder-custom-purple placeholder-opacity-50 border-2 shadow-sm border-custom-purple rounded-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label
                    htmlFor="password"
                    className="block mt-1 text-sm font-medium leading-6 text-gray-900"
                >
                    Confirm Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder='*********'
                    className="mt-1 px-3 py-5 block min-w-full sm:w-1/2 placeholder-custom-purple placeholder-opacity-50 border-2 shadow-sm border-custom-purple rounded-full"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                    className='mt-5 px-3 py-5 sm:py-10 block min-w-full sm:w-1/2 shadow-sm border-2 border-custom-purple m1-1 font-medium text-custom-purple bg-slate-100 rounded-lg'
                >
                    Captcha
                </button>

                <button
                    type='submit'
                    onClick={handleSubmit}
                    className='mt-5 px-3 py-5 block min-w-full sm:w-1/2 shadow-sm m1-1 font-medium text-white bg-custom-purple rounded-full'
                >
                    Sign Up
                </button>
                <p className='mt-5 text-center'>or</p>
                <p className='mt-5 text-center'>Already have an account?
                    <span>
                        <Link
                            className='text-custom-purple font-semibold'
                            href={'/signin'}> Sign in
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default SignUpForm;