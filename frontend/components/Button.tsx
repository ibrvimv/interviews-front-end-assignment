import Image from 'next/image';

interface PropsType {
  icon?: React.ElementType;
  alt: string;
  text: string;
  value: string;
}
export default function Button(props: PropsType) {
  return (
    <button className={`bg-green rounded-2xl px-5 py-4 border-2 border-green  text-white hover:bg-back hover:text-green transition-all duration-50 ${props.text === '' ? '' : 'flex justify-between'} `}>
      <div className={` ${props.text === '' ? '' : 'flex gap-2 items-center'} `}>
        <div>{props?.text}</div>
        {
          props.icon && <props.icon />
        }
      </div>
    </button>
  );
}
