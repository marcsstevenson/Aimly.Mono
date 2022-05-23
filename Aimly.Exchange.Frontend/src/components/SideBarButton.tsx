import React from 'react';

type Props = {
  children: JSX.Element;
};

const SideBarButton = ({ children }: Props) => {
  function createRipple(event: React.MouseEvent<any>) {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  return (
    <div className="ripple-container" onClick={createRipple}>
      {children}
    </div>
  );
};

export default SideBarButton;
