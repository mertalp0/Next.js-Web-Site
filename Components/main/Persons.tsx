import React from "react";
import PersonsCard from "../sub/PersonsCard";

const Persons = () => {
  return (
    <div
      className="flex flex-col items-center justify-center "
      id="persons"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Biz Kimiz ? 
      </h1>
      <section className="  body-font">
        <div className=" px-5  ">
          <div className="flex">
          <PersonsCard
          src="https://media.licdn.com/dms/image/D4D03AQEzEN5wDD_hdA/profile-displayphoto-shrink_800_800/0/1679918082214?e=1710979200&v=beta&t=C3umsRi0N_wB8C4M04EST8iUQSvpH387AeTGOP9BBm4"
          title="Mobile Developer"
          description=" Merhaba, Adım Mert Alp ve Balıkesir Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Yoğun bir ilgiyle Swift ve Flutter dillerine odaklanıyor, bu alanlardaki yeteneklerimi projeler aracılığıyla geliştirmeye özen gösteriyorum. Kariyer hedefim, mobil geliştirici olarak nitelikli bir yol çizmek. Bu süreçte kendimi sürekli yenileyerek, teknoloji dünyasındaki en güncel gelişmeleri yakından takip ediyorum."
          name="Mert Alp"
      />
        <PersonsCard
          src="https://media.licdn.com/dms/image/C4E03AQGr_3gSkk6q2A/profile-displayphoto-shrink_800_800/0/1656522221322?e=1710979200&v=beta&t=ZPU9ExX6ldUc_mLCfoKE6BpsGvsAlM3cBYlGFSAWXX4"
          title="Mobile Developer"
          description="Merhaba, Ben Ömer Erbalta, Balıkesir Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Swift ve Python dillerine yoğun ilgi duyuyor, bu alanlardaki yeteneklerimi geliştirmek amacıyla projeler üzerinde çalışıyorum. Kariyer hedefim, öncelikle Swift geliştirici olarak profesyonel bir yol çizmek. Bu süreçte kendimi sürekli olarak yenileyip, teknoloji dünyasındaki en son gelişmeleri takip ediyorum."
          name="Ömer ERBALTA"
      />  
          </div>
        </div>
      </section>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
 
      
      </div>
    </div>
  );
};

export default Persons;