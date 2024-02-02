import { mouseModule } from './mouseModule.js';

export async function mouseInit() {
  try {
    const response = await fetch('components/mouse/mouse.html');
    const html = await response.text();
    
    const container = document.getElementById('mouse');
    
    if (container) {
      container.innerHTML += html;
      
      if (container.innerHTML.trim() !== '') {
        mouseModule();
      }
    } else {
      console.error('Error: Container with id "mouse" not found.');
    }
  } catch (error) {
    console.error('Error fetching module:', error);
  }

}
mouseInit();

