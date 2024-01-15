// pages/index.js
import Image from "next/image";
import { HiOutlineLockClosed, HiOutlineMail, HiOutlineShieldCheck } from 'react-icons/hi'; // Heroicons'un outline setinden bazı simgeler

const About = () => {
  
  const skillsData = [
    { title: 'İZOLE ', description: 'Sadece Okulunuzdan kişilerin içerdiği bu uygulama size izole bir ortam sunar', icon: <HiOutlineLockClosed size={24} /> },
    { title: 'MESAJ', description: 'Bu uygulama ile istediğiniz kişilere anonim veya açık olarak mesaj atın.', icon: <HiOutlineMail size={24} /> },
    { title: 'GİZLİLİK', description: 'YUNİ ile kimliğiniz güvende istemediğiniz takdirle postları sizin attığınızı kimse bilmeyecek', icon: <HiOutlineShieldCheck size={24} /> },
    // ... Diğer özellikler
    
  ];
  return (
    <div className="bg-gradient-to-b from-black to-gray-900">

      <h1 className="text-3xl font-bold text-center mb-12">UYGULAMAYI KEŞFET</h1>
      <div className="flex items-center justify-center h-[50vh] text-white">
        <div className="flex flex-grow items-center">

          <div className="flex-grow bg-opacity-80 p-5  relative overflow-hidden h-[70vh]">
            <div className="relative " style={{ height: "100%", width: "100%" }}>
              <Image
              className="transition duration-200 ease-in-out transform hover:scale-105"
                src="/m.png"
                alt="Telefon Resmi"
                layout="fill"
                objectFit="cover"
                
              />
            </div>
          </div>
          <div className="flex-grow bg-opacity-60 p-5 max-w-screen-md mx-auto relative overflow-hidden h-[50vh]">

            <div className="bg-gradient-to-r from-blue-700 to-black-200 p-8 m-3 rounded-md flex items-center transition duration-300 ease-in-out transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              <p>Gizli paylaşım özelliği kullanıcılara rahatlık sunacak..</p>
            </div>
            <div className="bg-gradient-to-r  from-blue-700 to-black-200 m-3 p-8 rounded-md flex items-center transition duration-300 ease-in-out transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              <p>
                Gelişmiş filtreleme özellliği sayesinde istediğiniz gönderiye saniyeler
                içinde ulaşabileceksiniz.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-700 to-black-200 m-3 p-8 rounded-md flex items-center transition duration-300 ease-in-out transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              <p>
                Gelişmiş filtreleme özellliği sayesinde istediğiniz gönderiye saniyeler
                içinde ulaşabileceksiniz.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <div className="text-white">
      <div className="flex items-center p-8 justify-center h-[50vh]">
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => (
              <div key={index} className="flex flex-col items-center bg-blue-800 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                <div className="flex items-center justify-center mb-4 rounded-full bg-gray-900 p-4">
                  {skill.icon}
                </div>
                <h2 className="text-xl font-bold mb-4">{skill.title}</h2>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;

