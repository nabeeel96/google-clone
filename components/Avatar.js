function Avatar({ url, className }) {
  return (
    <Image
      loading='lazy'
      className={
        ' h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110'
      }
      src={url}
      alt='Profile pic'
    />
  );
}

export default Avatar;
