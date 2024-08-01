import Image from 'next/image';
export default function Header() {
  return (
    <div className=' bg-[#363f4e] p-6' >
        <Image src="http://images.squarespace-cdn.com/content/v1/5a37f1ac7131a5daca31ef98/1513616832858-T1IOXO2IHXGUS5GNNF0F/sky360_printVectorThicker_white.png?format=1500w" alt="Sky 360 Logo" width={200} height={200} />    
    </div>
  );
};