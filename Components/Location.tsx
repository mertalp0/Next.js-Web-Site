import React from 'react';

export const Location = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
        <iframe
  title="map"
  width="100%"
  height="600"
  frameBorder="0"
  scrolling="no"
  src="https://maps.google.com/maps?q=39.6480, 27.8819&z=14&output=embed"
></iframe> 

        </div>
        <div className="container px-5 py-24 mx-auto flex">
          {/* Feedback kısmını kaldırdık */}
        </div>
      </section>
    </div>
  );
};

export default Location;
