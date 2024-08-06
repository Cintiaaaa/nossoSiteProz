document.getElementById('buttonPerfil').addEventListener('click', validarlogin);

function validarlogin() {
    const emailCorreto = 'dominique@gmail.com'; 
    const senhaCorreta = '1234'; 

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === emailCorreto && senha === senhaCorreta) {
        alert('Email concluído com sucesso'); 
    } else {
        alert('Email ou senha incorreta');
    }
}
