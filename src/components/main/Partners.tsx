interface partner {
  description: string;
  image: string;
  link?: string;
  title: string;
}
interface PartnersProps {
  dict: any;
  partners: partner[];
}

export default function Partners(props: PartnersProps) {
  return <section></section>;
}
