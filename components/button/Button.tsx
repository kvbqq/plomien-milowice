"use client";

export const Button = ({
  text,
  href,
  style,
}: {
  text: string;
  href: string;
  style?: string;
}) => {
  function handleClick() {
    location.href = `/${href}`;
  }

  return (
    <button
      className={`px-8 py-3 bg-custom-gold text-white rounded-full ${style}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
