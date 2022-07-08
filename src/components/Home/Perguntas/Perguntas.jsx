import React from "react";
import './Perguntas.css';
import { AiOutlinePlus, AiOutlineRight } from "react-icons/ai";

function Perguntas(){

    function openAsk(i){

        let respostas = document.querySelectorAll('.answer');
        
        for(let n = 0; n <= respostas.length; n++) {
            if(respostas[n] === respostas[i]){
                respostas[i].classList.toggle('active'); 
               

            }else {
                respostas[n].classList.remove('active');  
            }
        }
         
    }

    return(
        <div className="cont_ask">
                <h1>Perguntas frequentes</h1>

                <ul className="ask_items">
                    <li>
                        <button className="ask" onClick={() => openAsk(0)}>O que é Netflix? 
                        <AiOutlinePlus className="faPlus"/>
                        </button>

                        <div className="answer">
                            <span>
                                 A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.
                                 <br />
                                 <br />
                                 Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                                 
                            </span>
                        </div>
                    </li>
                    <li>
                        <button className="ask" onClick={() => openAsk(1)}>Quanto custa a Netflix? 
                        <AiOutlinePlus className="faPlus"/>
                        </button>

                        <div className="answer">
                            <span>
                            Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato nem taxas extras.
                            </span>
                        </div>
                        
                    </li>
                    <li>
                        <button className="ask" onClick={() => openAsk(2)}>Onde posso assistir?
                        <AiOutlinePlus className="faPlus"/>
                         </button>

                         <div className="answer">
                             <span>Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.
                                <br />
                                <br />
                                Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.

                             </span>
                         </div>
                    </li>
                    <li>
                        <button className="ask" onClick={() => openAsk(3)}>Como faço para cancelar?
                        <AiOutlinePlus className="faPlus"/>
                         </button>

                         <div className="answer">
                             <span>
                                 A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.
                             </span>
                         </div>
                    </li>
                    <li>
                        <button className="ask" onClick={() => openAsk(4)}>O que eu posso assitir na Netflix? 
                        <AiOutlinePlus className="faPlus"/>
                        </button>

                        <div className="answer">
                            <span>
                                A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.
                            </span>
                        </div>
                    </li>
                    <li>
                        <button className="ask" onClick={() => openAsk(5)}>A Netflix é adequada para crianças?
                        <AiOutlinePlus className="faPlus"/>
                         </button>

                         <div className="answer">
                             <span>
                                A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos pais.]
                                <br />
                                <br />
                                O recurso de controle dos pais, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.
                             </span>
                         </div>
                    </li>
                </ul>

                        <form className="form_topo" method="get">
                            <h3>Pronto para assistir? Informe seu email para cria ou reiniciar sua assinatura.</h3>
                            <div className="input_form">
                                <input type='text' className="inputEmail" placeholder="Email"/>
                                <button type="submit" >Vamos lá <AiOutlineRight className="AiOutlineRight"/>
                               
                                 </button>
                            </div>
                        </form>


                
            </div>
    )
}

export default Perguntas;