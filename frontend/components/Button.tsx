import Image from 'next/image';

interface PropsType {
  icon: React.ElementType;
  alt: string;
  text: string;
  value: string;
}
export default function Button(props: PropsType) {
  return (
    <button className='bg-white rounded-md px-3 py-3 hover:text-green transition-all duration-200 flex justify-between '>
      <div className='flex gap-2 items-center'>
        <div>{props.text}</div>
        <props.icon />
      </div>
    </button>
  );
}
