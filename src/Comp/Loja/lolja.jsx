import { forwardRef, useState } from 'react';
import Style from './lolja.module.css';

function Lolja(prop, ref) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${Style.garrafa} ${isHovered ? Style.hovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={ref}
        >
            <div className={Style.diveee}>
                <img src={prop.image} className={Style.abc} alt='sdfj'></img>
            </div>
            {isHovered && (
                <div className={Style.cardInfo}>
                    <h2><b>{prop.texto}</b></h2>
                    <h3>{prop.desc}</h3>
                    <h1>{prop.preco}</h1>
                </div>
            )}
        </div>
    );
}

export default forwardRef(Lolja);
