import { layoutModule } from './layoutModule.js';

export async function layoutInit() {
  try {
    const response = await fetch('components/layout/layout.html');
    const html = await response.text();
    
    const container = document.getElementById('app');
    
    if (container) {
      container.innerHTML += html;
      
      if (container.innerHTML.trim() !== '') {
        layoutModule();
      }
    } else {
      console.error('Error: Container with id "app" not found.');
    }
  } catch (error) {
    console.error('Error fetching module:', error);
  }

}
layoutInit();

