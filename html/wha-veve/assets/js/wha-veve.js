function openWhaMenu() {
  const menu = document.getElementById('wha-menu');
  const button = document.getElementById('floating-wha');

  if (!menu || !button) return;

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    button.classList.remove('active');
  } else {
    menu.classList.add('active');
    button.classList.add('active');
  }
}
