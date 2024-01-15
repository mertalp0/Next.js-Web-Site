import React from 'react';

export const Developers = () => {
  return (
    <div className="bg-gradient-to-b  from-gray-900 to-pink-900">
            <hr className="border-t-2 border-gray-300" />

    <h1 className="text-center mt-8 font-bold title-font text-4xl text-white">Takım ? </h1>
      <section className="  body-font">
        <div className=" px-5 py-24 ">
          <div className="flex">
            <div className="lg:w-1/3 bg-gray-900   rounded-lg border border-white p-4 mx-auto">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover  rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://media.licdn.com/dms/image/D4D03AQEzEN5wDD_hdA/profile-displayphoto-shrink_800_800/0/1679918082214?e=1709769600&v=beta&t=NxUaZkXYouVGxa1wvRpkoXqzJ6TnOqAV7t8MxPQ41bM"
                />
                <p className="leading-relaxed">
                  Merhaba! Ben, Bilgisayar Mühendisliği öğrencisi olarak Balıkesir'de yaşayan bir bireyim. Teknoloji ve
                  bilgisayar bilimlerine olan büyük ilgim, üniversite eğitimim sırasında mobil uygulama geliştirmeye
                  yönelmemle daha da arttı. Bu alandaki becerilerimi ve bilgilerimi genişletmeye ve geliştirmeye odaklanarak,
                  projelerde yer alarak pratik deneyim kazanmaya çalışıyorum.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                <h2 className="text-white-900 font-medium title-font tracking-wider text-sm">Mert ALP</h2>
                <p className="text-gray-500">Senior Mobile Developer </p>
              </div>
            </div>
            <div className="lg:w-1/3 bg-gray-900   rounded-lg border border-white p-4 mx-auto">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://media.licdn.com/dms/image/C4E03AQGr_3gSkk6q2A/profile-displayphoto-shrink_800_800/0/1656522221322?e=1709769600&v=beta&t=ImcfI09iXJXheR1ar0shUI7QTj0kTMsGiWaIO_1GejI"
                />
                <p className="leading-relaxed">
                Merhaba! Ben, Bilgisayar Mühendisliği öğrencisi olarak Balıkesir'de yaşayan bir bireyim. Teknoloji ve
                  bilgisayar bilimlerine olan büyük ilgim, üniversite eğitimim sırasında mobil uygulama geliştirmeye
                  yönelmemle daha da arttı. Bu alandaki becerilerimi ve bilgilerimi genişletmeye ve geliştirmeye odaklanarak,
                  projelerde yer alarak pratik deneyim kazanmaya çalışıyorum.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">Ömer ERBALTA</h2>
                <p className="text-gray-500">Senior Swift Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
