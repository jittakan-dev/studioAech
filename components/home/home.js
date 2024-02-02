import { homeModule } from './homeModule.js';

export async function homeInit() {
  try {
    const response = await fetch('components/home/home.html');
    const html = await response.text();
    
    const container = document.getElementById('home');
    
    if (container) {
      container.innerHTML += html;
      
      if (container.innerHTML.trim() !== '') {
        homeModule();
      }
    } else {
      console.error('Error: Container with id "home" not found.');
    }
  } catch (error) {
    console.error('Error fetching module:', error);
  }
}
homeInit();