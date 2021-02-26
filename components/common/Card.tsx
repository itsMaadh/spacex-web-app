import { format } from "date-fns";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  date: Date;
  url: string;
}

export default function Card(props: Props) {
  return (
    <Link href={props.url}>
      <a>
        <div className="relative mb-4 lg:mb-0">
          <div className="absolute inset-0 bg-black opacity-30 h-full flex flex-col rounded-xl"></div>
          <img
            className="rounded-xl w-full h-96 object-cover object-center shadow-xl"
            src={props.image}
            alt={props.title}
          />
          <div className="absolute bottom-5 left-5">
            <h4 className="font-semibold text-white text-2xl">{props.title}</h4>
            <p className="text-white">
              {format(new Date(props.date), "do MMM yyyy")}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
