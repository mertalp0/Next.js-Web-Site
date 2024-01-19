"use client"
import React from "react";
import AppContent from "../sub/AppContent";
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const AppInfo = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="appInfo">
     
     <div className="flex flex-row justify-around flex-wrap  gap-5 items-center">
     <div className='w-full h-auto flex flex-col items-center justify-center'>
        
        <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate={ "visible" }
        className=' font-medium  text-center '
        >
               <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Uygulamayı Keşfet
      </h1>
        </motion.div>
      
    </div>
            <AppContent
            image = "/phone2.png"
            text = {["Üniversite yaşamınızı renklendiren, anonim paylaşımlarınızı kolayca yapmanızı sağlayan uygulamamızla tanışın!", 
            "Gelişmiş filtreleme seçenekleri sayesinde, istediğiniz konuları hızlıca bulun ve paylaşımları filtreleyerek daha kişisel bir deneyim yaşayın."
          ,"Üniversiteniz ile ilgili tüm detaylara anında erişim sağlayabilirsiniz."]}
            position = {true}
            
            />
             <AppContent
            image = "/phone3.png"
            text = {["Üniversitenizde ki kişileri aramak için kullanıcı dostu arama özelliğimizi keşfedin",
             "Anonimlik ve güvenli paylaşımın keyfini çıkarın; izole bir ortamda özgürce düşüncelerinizi paylaşabilirsiniz.",
            "Uygulamamız da, etkileşimli bir öğrenci topluluğu oluşturarak, üniversite deneyiminizi daha eğlenceli ve bağlantılı hale getirin.            "]}
            position = {false}
            
            />
          
          
        </div>
    </div>
  );
};

export default AppInfo;