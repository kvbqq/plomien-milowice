import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

export const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link
      href={`${href}`}
      className={`px-8 py-3 bg-custom-gold text-white rounded-full`}
    >
      {text}
    </Link>
  );
};
