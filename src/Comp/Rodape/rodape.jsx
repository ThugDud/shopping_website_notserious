import Styled from './rodape.module.css'

export default function Rodarodajequiti(){
    return(
        <div className={Styled.pacote}>
            <div className={Styled.container}>
                <div className={Styled.contido}>
                    <h2>Fale Conosco</h2>
                    <h3>Email: ejr78763@gmail.com</h3>
                    <h3>Whatsapp: (89) 99936-1014</h3>
                </div>
                <div className={Styled.contido}>
                    <h2>Outros sites</h2>
                    <a href='http://bomaxbrasil.orgfree.com'>HBO MAX brasil</a>
                    <a href='http://pudim.com.br'> Pudim</a>
                </div>
            </div>
            <div className={Styled.container}>
                <h3>Passito Website™ todos os direitos reservados</h3>
                <img src="\imagem\65e7bafd7e62ad22257ea27d93c7a4af.png" alt="asd" />
            </div>
        </div>
    )
}