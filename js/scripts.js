function gerarSenha(comprimento, incluirMaiusculas, incluirMinusculas, incluirNumeros, incluirEspeciais) {
    const caracteresMaiusculos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresMinusculos = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresNumeros = '0123456789';
    const caracteresEspeciais = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let caracteresPermitidos = '';

    if (incluirMaiusculas) {
        caracteresPermitidos += caracteresMaiusculos;
    }
    if (incluirMinusculas) {
        caracteresPermitidos += caracteresMinusculos;
    }
    if (incluirNumeros) {
        caracteresPermitidos += caracteresNumeros;
    }
    if (incluirEspeciais) {
        caracteresPermitidos += caracteresEspeciais;
    }

    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length);
        senha += caracteresPermitidos.charAt(randomIndex);
    }

    return senha;
}

document.getElementById('gerar').addEventListener('click', function () {
    const comprimento = document.getElementById('comprimento').value;
    const incluirMaiusculas = document.getElementById('maiusculas').checked;
    const incluirMinusculas = document.getElementById('minusculas').checked;
    const incluirNumeros = document.getElementById('numeros').checked;
    const incluirEspeciais = document.getElementById('especiais').checked;

    const senhaGerada = gerarSenha(comprimento, incluirMaiusculas, incluirMinusculas, incluirNumeros, incluirEspeciais);

    document.getElementById('senha-gerada').textContent = senhaGerada;
});
