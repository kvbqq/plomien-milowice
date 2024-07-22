import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  style?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, href, style }) => {
  return (
    <Link
      href={`${href}`}
      className={`px-8 py-3 bg-custom-gold font-medium text-center text-white rounded-full ${style}`}
    >
      {text}
    </Link>
  );
};
