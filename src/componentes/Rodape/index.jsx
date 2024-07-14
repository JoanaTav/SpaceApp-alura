import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 28px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Rodape() {
    return (
        <RodapeEstilizado>
            <IconeContainer>

                <li>
                    <a href="https://github.com/JoanaTav" target="_blank" rel="noreferrer">
                        <img src="/imagens/sociais/github.svg" alt="logo do github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/joana-tavares-dev/" target="_blank" rel="noreferrer">
                        <img src="/imagens/sociais/linkedin.svg" alt="logo do linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/AluraCursosOnline/?locale=pt_BR" target="_blank" rel="noreferrer">
                        <img src="/imagens/sociais/facebook.svg" alt="logo do facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/aluraonline" target="_blank" rel="noreferrer">
                        <img src="/imagens/sociais/twitter.svg" alt="logo do twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/aluraonline/" target="_blank" rel="noreferrer">
                        <img src="/imagens/sociais/instagram.svg" alt="logo do instagram" />
                    </a>
                </li>
            </IconeContainer>
            <RodapeTexto>Desenvolvido por Alura ⋅ JoanaTav 2024</RodapeTexto>
        </RodapeEstilizado>
    );
}

export default Rodape;