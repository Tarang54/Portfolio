'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const circle = cursorInnerRef.current;

    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const render = () => {
      pos.x = lerp(pos.x, mouse.x, 0.2);
      pos.y = lerp(pos.y, mouse.y, 0.2);

      if (circle) {
        circle.style.transform = `translate3d(${pos.x - 12}px, ${pos.y - 12}px, 0) scale(${scale})`;
      }

      requestAnimationFrame(render);
    };

    let scale = 1;
    let isHidden = false;

    render();

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Check if hovering over SVG or link
      const target = e.target;
      const isSVG = target.tagName === 'svg' || target.closest('svg');
      const isLink = target.tagName === 'A' || target.closest('a');

      if ((isSVG || isLink) && !isHidden) {
        if (circle) circle.style.opacity = '0';
        isHidden = true;
      } else if (!(isSVG || isLink) && isHidden) {
        if (circle) circle.style.opacity = '1';
        isHidden = false;
      }
    };

    const onMouseEnter = () => {
      scale = 1.8;
    };

    const onMouseLeave = () => {
      scale = 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Target all clickable elements (excluding regular links since we're handling them above)
    const hoverTargets = document.querySelectorAll('button, .js-link');

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block mix-blend-difference"
    >
      <div
        ref={cursorInnerRef}
        className="w-6 h-6 border border-white rounded-full relative transition-transform duration-150 ease-out transition-opacity duration-100"
      />
    </div>
  );
}