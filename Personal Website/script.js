document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = tab.getAttribute('data-tab');

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(targetId).classList.add('active');

    if (history.pushState) {
      history.pushState(null, null, '#' + targetId);
    }
  });
});

// Restore tab from hash on load
const hash = window.location.hash.slice(1) || 'home';
const targetTab = document.querySelector('.tab[data-tab="' + hash + '"]');
const targetPanel = document.getElementById(hash);
if (targetTab && targetPanel) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  targetTab.classList.add('active');
  targetPanel.classList.add('active');
}
