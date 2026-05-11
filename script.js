document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const themeBtn = document.getElementById('theme-toggle');

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('alt-theme');
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const msg = document.getElementById('mensagem').value;

        if (!nome || !email || !msg) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (!email.includes("@")) {
            alert("Insira um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        contactForm.reset();
    });
});
