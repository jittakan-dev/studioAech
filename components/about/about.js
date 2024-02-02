import { aboutModule } from './aboutModule.js';

export async function aboutInit() {
  try {
    const response = await fetch('components/about/about.html');
    const html = await response.text();
    const container = document.getElementById('about');
    container.innerHTML += html;
    if (container.innerHTML.trim() !== '') {
      aboutModule();
    }
  } catch (error) {
    console.error('Error fetching module:', error);
  }
}
aboutInit();