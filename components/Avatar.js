import Image from 'next/image';

function Avatar({ url, className }) {
  return (
    <Image
      loading='lazy'
      width={40}
      height={40}
      className={` h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt='Profile pic'
    />
  );
}

export default Avatar;
