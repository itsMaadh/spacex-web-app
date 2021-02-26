interface Props {
  text: string;
}

export default function Title(props: Props) {
  return <h1 className="font-semibold text-4xl font-headline">{props.text}</h1>;
}
