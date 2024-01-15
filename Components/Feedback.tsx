// Feedback.tsx
'use client';
import React, { ChangeEvent, useState } from 'react';
import { db } from '../Service/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const FeedBack = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Formun boş olup olmadığını kontrol et
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Lütfen tüm alanları doldurun.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return; // Form boşsa işlemi sonlandır
    }

    try {
      const docRef = await addDoc(collection(db, 'feedback'), { ...formData });
      console.log('Veri başarıyla Firestore\'a eklendi. Document ID:', docRef.id);

      setFormData(initialState);

      toast.success('Mesajınız başarıyla alınmıştır!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Veri eklenirken hata oluştu:', error);

      toast.error(`Mesajınız alınamadı. Hata: ${error}`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-pink-900 to-gray-900">
      <div className="flex items-center justify-center h-[70vh] text-white">
        <div className="w-full max-w-screen-md mx-auto p-8 bg-gray-800 bg-opacity-70 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-center mb-4 text-white">İletişim</h1>
          <p className="text-lg text-gray-300 text-center mb-6">Bize ulaşın, sorularınızı bizimle paylaşın!</p>

          <form className="grid grid-cols- md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-lg mb-2" htmlFor="name">Ad Soyad</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border-2 border-white rounded text-black" />
            </div>

            <div className="mb-4">
              <label className="block text-white text-lg mb-2" htmlFor="email">E-posta</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border-2 border-white rounded text-black" />
            </div>

            <div className="mb-4 col-span-2">
              <label className="block text-white text-lg mb-2" htmlFor="message">Mesajınız</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full p-3 border-2 border-white rounded text-black"></textarea>
            </div>

            <div className="col-span-2 flex justify-center items-center">
              <button
                type="submit"
                className="bg-blue-900 py-2 px-20 text-white hover:bg-gray-800 rounded-md text-base focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FeedBack;
