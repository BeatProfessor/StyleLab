// Arranque y navegación.

document.querySelectorAll('nav button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('nav button').forEach(b => b.classList.remove('activa'));
        btn.classList.add('activa');
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('visible'));
        document.getElementById('panel-' + btn.dataset.panel).classList.add('visible');
    });
});