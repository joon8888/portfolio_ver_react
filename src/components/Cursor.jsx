import { useEffect, useState } from "react";
import './../styles/components/Cursor.scss';

const isPcDevice = () => {
  const ua = navigator.userAgent.toLowerCase();
  return !/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile|ipad|tablet/i.test(ua);
};

const cursorEventHandler = () => {
  const cursor = document.querySelector('.cursor');
  if (!cursor) return;

  let pageX = 0;
  let pageY = 0;
  let targetX = 0;
  let targetY = 0;
  const smoothingSpeed = 0.15;

  window.addEventListener('mousemove', (e) => {
    pageX = e.clientX;
    pageY = e.clientY;
  });

  const animate = () => {
    targetX += (pageX - targetX) * smoothingSpeed;
    targetY += (pageY - targetY) * smoothingSpeed;
    cursor.style.left = `${targetX}px`;
    cursor.style.top = `${targetY}px`;
    requestAnimationFrame(animate);
  };
  animate();

  const bindHoverEvents = (el) => {
    el.addEventListener('mouseenter', () => {
      const status = el.dataset.cursor;
      cursor.dataset.cursorStatus = status || 'zoom';
    });
    el.addEventListener('mouseleave', () => {
      cursor.removeAttribute('data-cursor-status');
    });
  };

  // 최초 대상 요소 바인딩
  const initialTargets = document.querySelectorAll(
    '[data-cursor], a[href]:not([href="#"]):not([href="#none"]):not([href="javascript:void(0)"]):not([href="javascript:;"]), button'
  );
  initialTargets.forEach(bindHoverEvents);

  // 새 DOM 자동 감지 (팝업/컴포넌트 리렌더 등)
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;

        if (node.matches?.('[data-cursor], a[href], button')) {
          bindHoverEvents(node);
        }

        node.querySelectorAll?.('[data-cursor], a[href], button')?.forEach?.(bindHoverEvents);
      });
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

const Cursor = () => {
  const [isPc, setIsPc] = useState(false);

  useEffect(() => {
    const pc = isPcDevice();
    setIsPc(pc);
  }, []);
  
  useEffect(() => {
    if (isPc) {
      cursorEventHandler();
    }
  }, [isPc]);

  if (!isPc) return null;

  return (
    <div className="cursor">
      <p className="cursor__item">
        <span className="cursor__item__text"></span>
      </p>
    </div>
  );
};

export default Cursor;
