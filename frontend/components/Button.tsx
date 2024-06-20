import Image from 'next/image';

interface PropsType {
  icon: React.ElementType;
  alt: string;
  text: string;
  value: string;
}
export default function Button(props: PropsType) {
  return (
    <button className={`bg-white rounded-2xl px-5 py-4 hover:text-green hover:shadow-2xl hover:shadow-green transition-all duration-50 ${props.text === '' ? '' : 'flex justify-between'} `}>
      <div className={` ${props.text === '' ? '' : 'flex gap-2 items-center'} `}>
        <div>{props.text}</div>
        <props.icon />
      </div>
    </button>
  );
}
