import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={242}
      height={43}
      className="h-8 w-auto"
      priority
    />
  );
};

export default Logo;
