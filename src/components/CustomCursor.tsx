import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, summary';

const CustomCursor = () => {
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100, angle: 0 });

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(hover: none), (pointer: coarse)").matches
    ) {
      return;
    }

    setEnabled(true);

    const render = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.18;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.18;

      const dx = targetRef.current.x - currentRef.current.x;
      const dy = targetRef.current.y - currentRef.current.y;
      const angle = Math.max(-18, Math.min(18, dx * 0.14 + dy * 0.03));

      setPosition({
        x: currentRef.current.x,
        y: currentRef.current.y,
        angle,
      });

      frameRef.current = window.requestAnimationFrame(render);
    };

    const handleMove = (event: MouseEvent) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;

      if (!visible) {
        currentRef.current.x = event.clientX;
        currentRef.current.y = event.clientY;
        setPosition({ x: event.clientX, y: event.clientY, angle: 0 });
      }

      setVisible(true);
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target;
      setHovering(
        target instanceof Element && Boolean(target.closest(INTERACTIVE_SELECTOR))
      );
    };

    const hideCursor = () => setVisible(false);

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    frameRef.current = window.requestAnimationFrame(render);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("blur", hideCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("visibilitychange", hideCursor);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("visibilitychange", hideCursor);
    };
  }, [visible]);

  if (!enabled) return null;

  return (
    <div
      className={`custom-cursor ${visible ? "is-visible" : ""} ${
        hovering ? "is-hovering" : ""
      } ${pressed ? "is-pressed" : ""}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${position.angle}deg)`,
      }}
      aria-hidden="true"
    >
      <div className="custom-cursor__halo" />
      <img src="/brush.png" alt="" className="custom-cursor__brush" />
    </div>
  );
};

export default CustomCursor;
