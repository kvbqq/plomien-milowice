"use client";

export const Button = ({ text, href }: { text: string; href: string }) => {
  function handleClick() {
    location.href = "/o-akademii";
  }

  return (
    <button
      className={"w-44 py-3 bg-custom-gold text-white rounded-full"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
