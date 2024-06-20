import Image from 'next/image';

interface PropsType {
  icon?: React.ElementType;
  alt: string;
  text: string;
  value: string;
}
export default function Button(props: PropsType) {
  return (
    <button className={`bg-green rounded-2xl px-5 h-14 border-2 border-green   text-white hover:bg-back hover:text-green transition-all duration-50 flex justify-between items-center`}>
      <div className={`flex gap-2 items-center`}>
        {
          props.text && <div>{props?.text}</div>
        }
        {
          props.icon && <props.icon />
        }
      </div>
    </button>
  );
}
