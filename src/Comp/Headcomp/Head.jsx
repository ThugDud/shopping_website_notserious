import Styled from "./Head.module.css"

export default function Heades(prope){
    return(
        <>
        <header className={Styled.vacina}>
                <div className={Styled.cacilda}>
                    <img alt="abceede" src="\imagem\65e7bafd7e62ad22257ea27d93c7a4af.png" className={Styled.img}/>
                    <h1>PASSITO WEBSITE</h1>
                </div>
            <h1 className={Styled.asds}>Seje bem vindo, temos os melhores produtos para perder o tempo!</h1>
        </header>
        <div className={Styled.labareta}>
            <h2>Home</h2>
            <h2>Sobre Nós</h2>
            <h2>Fale Conosco</h2>
            <h2>Produtos +18 💋</h2>
        </div>
        </>
    );
}