import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-[30px] right-[30px] z-50 w-[50px] h-[40px] bg-brand text-white text-2xl flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <FaAngleUp />
    </button>
  );
}