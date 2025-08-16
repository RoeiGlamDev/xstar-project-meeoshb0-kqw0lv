import { useEffect, useRef } from 'react';

/
 * Custom hook for animating elements in the luxury LRP cosmetics website.
 * This hook applies elegant 3D animations to enhance the user experience
 * and create a luxurious feel that aligns with the brand identity.
 *
 * @param {string} animationType - The type of animation to apply.
 * @param {number} duration - Duration of the animation in milliseconds.
 * @returns {React.RefObject<HTMLElement>} - Ref to the animated element.
 */
export interface AnimationProps {
  animationType: 'fadeIn' | 'slideIn' | 'zoomIn';
  duration: number;
}

export const useAnimation = ({ animationType, duration }: AnimationProps) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      // Luxury LRP cosmetics specific animation logic
      switch (animationType) {
        case 'fadeIn':
          element.style.opacity = '0';
          element.style.transition = opacity ${duration}ms ease-in-out;
          requestAnimationFrame(() => {
            element.style.opacity = '1';
          });
          break;
        case 'slideIn':
          element.style.transform = 'translateX(-100%)';
          element.style.transition = transform ${duration}ms ease-in-out;
          requestAnimationFrame(() => {
            element.style.transform = 'translateX(0)';
          });
          break;
        case 'zoomIn':
          element.style.transform = 'scale(0)';
          element.style.transition = transform ${duration}ms ease-in-out;
          requestAnimationFrame(() => {
            element.style.transform = 'scale(1)';
          });
          break;
        default:
          break;
      }
    }
  }, [animationType, duration]);

  return elementRef;
};