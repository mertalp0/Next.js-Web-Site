
'use client';
import React, { ChangeEvent, useState } from 'react';
import { db } from '../../service/Firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import StarsCanvas from '@/components/main/StarBackground';
import Content from "@/components/main/Contact";
import RegisterForm from '@/components/main/registerForm';

const initialState = {
  userName: '',
  email: '',
  password: '',
  passwordAgain: '',
};

const Register = () => {

  return (
    <main className="h-full w-full">
    <div className="flex flex-col gap-20">
      <RegisterForm/>
      <StarsCanvas/>
    </div>
  </main>

  );
}

export default Register;
