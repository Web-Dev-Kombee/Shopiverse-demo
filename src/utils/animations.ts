
// Utility functions for animations

// Fade in element with delay
export const fadeInWithDelay = (element: HTMLElement, delay: number) => {
  element.style.opacity = "0";
  element.style.transition = `opacity 0.6s ease-out ${delay}s`;
  
  setTimeout(() => {
    element.style.opacity = "1";
  }, delay * 1000);
};

// Slide up element with delay
export const slideUpWithDelay = (element: HTMLElement, delay: number) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`;
  
  setTimeout(() => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  }, delay * 1000);
};

// Add staggered animation to children
export const staggerChildren = (parent: HTMLElement, childSelector: string, staggerDelay: number = 0.1) => {
  const children = parent.querySelectorAll(childSelector);
  
  children.forEach((child, index) => {
    const delay = index * staggerDelay;
    const element = child as HTMLElement;
    
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`;
    
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, delay * 1000);
  });
};

// Scale in element with delay
export const scaleInWithDelay = (element: HTMLElement, delay: number) => {
  element.style.opacity = "0";
  element.style.transform = "scale(0.95)";
  element.style.transition = `opacity 0.4s ease-out ${delay}s, transform 0.4s ease-out ${delay}s`;
  
  setTimeout(() => {
    element.style.opacity = "1";
    element.style.transform = "scale(1)";
  }, delay * 1000);
};
