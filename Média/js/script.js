/* Insira seu código em javascript abaixo */

console.log('Olá Mastertech!');

function search() {
        let pesquisa = $('#buscar').val();
        let filter = pesquisa.toUpperCase();
        let p = $('.tituloPergunta');
        let q = $('.quadro');
        let a;

        for (i = 0; i < p.length; i++) {
            a = p[i];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                p[i].style.display = "";
                q[i].style.display = "";

            } else {
                p[i].style.display = "none";
                q[i].style.display = "none";
            }
        }
           }