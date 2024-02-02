import { workModule } from './workModule.js';

export async function workInit() {
  try {
    const response = await fetch('components/work/work.html');
    const html = await response.text();
    
    const container = document.getElementById('work');
    
    if (container) {
      container.innerHTML += html;
      
      if (container.innerHTML.trim() !== '') {
        workModule();
      }
    } else {
      console.error('Error: Container with id "work" not found.');
    }
  } catch (error) {
    console.error('Error fetching module:', error);
  }
}
workInit();