import Styled from "./protest.module.css"

export default function Protest(prope) {
    return(
        <div className={Styled.osmose}>
            <div className={Styled.asfk}>
                <h1 className={Styled.riuki}>{prope.titulo}</h1>
                <h3 className={Styled.misato}>{prope.desc}</h3>
            </div>
            <div className={Styled.shinji}>
                <img className={Styled.ayanami} alt="osmose" src={prope.imge}></img>
                <div className={Styled.triangle}></div>
            </div>
        </div>
    );
}