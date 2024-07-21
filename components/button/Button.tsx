import Link from "next/link";

export const Button = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={`${href}`}
      className={`px-8 py-3 bg-custom-gold text-white rounded-full hover:bg-black`}
    >
      {text}
    </Link>
  );
};
