import './App.css';
import Heades from './Comp/Headcomp/Head';
import Lolja from './Comp/Loja/lolja';
import Protest from './Comp/Protest/protest';
import Rodarodajequiti from './Comp/Rodape/rodape';

function App() {

  return (
    <div className="apep">
      <Heades imge='public\logo192.png'/>
      <h1 className='marginleft'>Esporte e Academia</h1>
      <div className='lolja' id='pt1'>
        <Lolja image='imagem/51H+e+8cWbL.jpg' texto='Toalha Evangelion' desc='Nullify From the long established Japanese towel manufacturer Marushin comes the NERV EMERGENCY Sports Towel!' preco='R$: 50.00'/>
        <Lolja image='imagem/18731214_1.webp' texto='Camisa academia Evangelion' desc='In addition to evangelion designs, you can explore the marketplace for manga and anime designs sold by independent artists.' preco='R$: 20.00'/>
        <Lolja image='imagem/ca7f4fd900736c0d0bfa1d2eb1c2291c_tankTop_neutral-front.jpg' texto='Regata Evangelion' desc='This premium high quality minimize & sew tanktop will not be solely very comfy' preco='R$: 40.00'/>
        <Lolja image='imagem/3480bc-black-xs-t-beast-mode-eva-parody.jpg' texto='Regata Evangelion' desc='Get fit to defend Tokyo 3 from the angels and prevent the third impact by activating beast mode when youre at the gym working out.' preco='R$: 70.00'/>
      </div>
      <div>
        <Protest titulo='Desconto Imperdível em Produtos de Esporte e Academia!' desc='Preparados para uma grande notícia que vai impulsionar seus treinos e atividades esportivas? Temos 30% de desconto e frete gratis em compras de mais de R$:100 ' imge='imagem/merchandise.webp'/>
      </div>
      <h1 className='marginleft'>Miscelâneos</h1>
      <div className='lolja' id='pt2'>
        <Lolja image='imagem/robso.png' texto='Mexirica / Robson' desc='Tangerina de nome regional, pronta entrega, frete gratis, 24 unidades p/ encomenda' preco='R$: 15.50'/>
        <Lolja image='imagem/5295223.jpg' texto='The Orange Box' desc='A Orange Box é um pacote que inclui cinco jogos da Valve: Half-life 2, Half-Life 2: Episode One, Half-Life: Episode Two, Team Fortress 2 e Portal!' preco='R$: 199.99'/>
        <Lolja image='imagem/1dcf9f7c88944f6ebfde19cfca135e90xl.jpg' texto='Rei Plush' desc='Melhor boneco feito pela raça humana, cheia de funcionalidades e features imbutidas em seu ser, com horas de entreterimento!' preco='R$: 0.50'/>
        <Lolja image='imagem/download.webp' texto='Calça jeans feminina' desc='A calça para uma menina de 16 anos custa mais de 300 reais' preco='R$: 300.00'/>  
      </div>
      <h1 className='marginleft'>Serviços</h1>
      <div className='lolja' id='pt3'>
        <Lolja image='imagem/X.jpg' texto='X Premium' desc='Assinatura mensal paga opcional que oferece selo azul à sua conta e acesso antecipado para selecionar novos recursos, como o Editar post.' preco='R$: 38.94/mês'/>
        <Lolja image='imagem/download.png' texto='Netflix Premium' desc='O plano premium, mais caro, permite a reprodução de vídeos em qualidade 4K, opção de download e uso em até quatro dispositivos simultaneamente.' preco='R$: 55.99/mês'/>
        <Lolja image='imagem/hbomax.webp' texto='HBO Max' desc='Todos os seus dispositivos, 3 telas ao mesmo tempo, Alta definição e tecnologia 4k, Baixe até 30 títulos, 5 perfis diferentes' preco='R$: 34.90/mês'/>
        <Lolja image='imagem/fotos-catraca-2023-05-29t103034464.webp' texto='Prime Video' desc='serviço de streaming de vídeo oferecido pela Amazon. Ele permite que os assinantes tenham acesso a uma grande variedade de filmes e séries de TV.' preco='R$: 9.90/mês'/>
      </div>
      <Rodarodajequiti id='pt4'/>
    </div>
  );
}

export default App;

//<Lolja image='' texto='' desc='' preco=''/>