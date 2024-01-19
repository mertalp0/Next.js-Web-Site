
'use client';
import React, { ChangeEvent, useState } from 'react';
import { db } from '../../service/Firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const initialState = {
    userName: '',
    email: '',
    password: '',
    passwordAgain: '',
  };
  
  const RegisterForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!formData.userName || !formData.email || !formData.password || !formData.passwordAgain) {
        toast.error('Lütfen tüm alanları doldurun.', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
  
        return;
      }
  
      if (formData.password !== formData.passwordAgain) {
        toast.error('Şifreler eşleşmiyor.', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }
  
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const uid = userCredential.user.uid;
  
        // Firestore'a kullanıcı bilgilerini kaydet
        const userDocRef = await setDoc(doc(db, 'users', uid), {
          uid: uid,
          userName: formData.userName,
          email: formData.email,
          createdAt: new Date(),
          // Ek bilgileri buraya ekleyebilirsiniz
        });
  
  
        setFormData(initialState);
  
        toast.success('Kaydınız Başarıyla Oluşturulmuştur!', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setTimeout(() => {
          router.back();
        }, 2500); 
        
      } catch (error) {
        console.error('Hata:', error);
  
        toast.error(`Kayıt sırasında bir hata oluştu. Hata: ${error}`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    };
  
    return (
      <div className='z-[20] mb-20' id='registerForm' >
     

<div className="flex items-center justify-center h-[70vh] text-white ">
<div className="w-full max-w-screen-md mx-auto p-8 bg-gray-800 bg-opacity-70 rounded-lg shadow-xl">
  <h1 className="text-4xl font-bold text-center mb-4 text-white">Kayıt Ol </h1>
  <p className="text-lg text-gray-300 text-center mb-6">Hemen Kayıt Ol Ve Yuni'nin Tadını Çıkar</p>

  <form className="grid grid-cols- md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-white text-lg mb-2 z-[8]" htmlFor="userName">Kullanıcı Adı</label>
      <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} className="w-full p-3 border-2 border-white rounded text-black" />
    </div>

    <div className="mb-4">
      <label className="block text-white text-lg mb-2" htmlFor="email">E-posta</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border-2 border-white rounded text-black" />
    </div>

    <div className="mb-4">
      <label className="block text-white text-lg mb-2 z-[8]" htmlFor="password">Şifre</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-3 border-2 border-white rounded text-black" />
    </div>

    <div className="mb-4">
      <label className="block text-white text-lg mb-2" htmlFor="passwordAgain">Şifre Tekrar</label>
      <input type="password" id="passwordAgain" name="passwordAgain" value={formData.passwordAgain} onChange={handleChange} className="w-full p-3 border-2 border-white rounded text-black" />
    </div>

    <div className="col-span-2 flex justify-center items-center">
      <button
        type="submit"
        className="inline-flex items-center bg-blue-900 py-2 px-7 text-white hover:bg-gray-800 rounded-md text-base mt-4 md:mt-0 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Kayıt Ol
      </button>
    </div>
  </form>
</div>
</div>
      <ToastContainer className='z-[50]'/>
    </div>
  
    );
  };

export default RegisterForm

