const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados= await res.json()
const pessoasConectadas =(dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = ParseInt(dados.tempo_medio_medio)
const minutos = math.round (dados.tempo_medio - horas) * 100
const porcentagemConectadas = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

   const paragrafo= document.createElement('p')
   paragrafo.classList.add('graficos-container__texto')

   paragrafo.innerHTML= 'Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoas_conectadas} bilhões</span> estao conectadas em alguma rede social e passam em media <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br> Isso significa que aproximadamente <span>${porcentagemConectada}%</span> 63.89% de pessoas estão conectadas em alguma rede social'
   console.log(paragrafo)

   const conteiner= document.getElementById('graficos-container')
   container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()