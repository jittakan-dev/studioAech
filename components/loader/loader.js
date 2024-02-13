export async function loadInit() {
  try {
    const response = await fetch('components/loader/loader.html');
    const html = await response.text();
    
    const container = document.getElementById('loader');
    
    if (container) {
      container.innerHTML += html;

    } else {
      console.error('Error: Container with id "loader" not found.');
    }
  } catch (error) {
    console.error('Error fetching module:', error);
  }
}
loadInit();