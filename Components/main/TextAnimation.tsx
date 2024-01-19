'use client'
import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' İzole Ortam',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' Anonim Paylaşım',
        1000,
        ' Detaylı Filtre',
        1000,
        ' Tüm Öğrencilere erişim',
        1000
      ]}
      speed={50}
      style={{ fontSize: '0.6em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default TextAnimation;