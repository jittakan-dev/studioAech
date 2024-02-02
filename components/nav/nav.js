import { navScrollModule } from './navScrollModule.js';
import { navBubbleModule } from './navBubbleModule.js';

export async function navInit() {
  try {
    
    const response = await fetch('components/nav/nav.html');
    const html = await response.text();
    
    const container = document.getElementById('nav');
    
    if (container) {
      container.innerHTML += html;
      
      if (container.innerHTML.trim() !== '') {
        navScrollModule();
        navBubbleModule();
      }
    } else {
      console.error('Error: Container with id "nav" not found.');
    }
  } catch (error) {
    console.error('Error fetching module:', error);
  }
}
navInit();