import './section2.css'
import Network from './img/network.png'
import User1 from './img/user1.jpg'
import User2 from './img/user2.jpg'
import Facebook from './img/facebook-icon.png'
import Instagram from './img/instagram-icon.png'
import Linkedin from './img/linkedin-icon.png'
import Twitter from './img/twitter-icon.png'
import Whatsapp from './img/whatsapp-icon.png'


function Section2() {
    return (
        <div>

            <section id="about-us">
                <div class="
  container">
                    <h1 class="title text-center">POR QUE ESCOLHER-NOS</h1>
                    <div class="row">
                        <div class="col-md-6 about-us">
                            <p class="about-title">Porque somos diferentes</p>
                            <ul>
                                <li>Acreditamos em fazer negócios honestamentes</li>
                                <li>Entendemos os objetivos dos nossos clientes</li>
                                <li>Entregamos pontualmente</li>
                                <li>Criamos uma estratégia de sucesso</li>
                                <li>Protegemos nossa reputação online</li>
                                <li>Estamos bem localizados no mercado</li>
                                <li>Atendimento personalizado de fácil acesso</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <img src={Network} class="img-fluid"></img>
                        </div>
                    </div>
                </div>

            </section>

            <section id="testimonials">
                <div class="container">
                    <h1 class="title text-center">O QUE OS CLIENTES DIZEM</h1>
                    <div class="row offset-1">
                        <div class="col-md-5 testimonials">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt eligendi distinctio. Voluptate minus repellat architecto tempore alias quia esse error consequuntur reiciendis voluptatum, fuga voluptates dolore praesentium necessitatibus ab.</p>
                            <img src={User1}></img>
                            <p class="user-details"><b>Sofia</b><br></br>Co-fundadora da Techmark</p>
                        </div>
                        <div class="col-md-5 testimonials">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt eligendi distinctio. Voluptate minus repellat architecto tempore alias quia esse error consequuntur reiciendis voluptatum, fuga voluptates dolore praesentium necessitatibus ab.</p>
                            <img src={User2}></img>
                            <p class="user-details"><b>Igor Caenfa</b><br></br>P.O. na BraillinCode</p>
                        </div>

                    </div>
                </div>

            </section>

            <section id="social-media">
                <div class="container text-center">
                    <p>ENCONTRE-NOS NAS REDES SOCIAIS</p>
                    <div class="social-icons">
                        <a href="#"><img src={Facebook} alt=""></img></a>
                        <a href="#"><img src={Instagram} alt=""></img></a>
                        <a href="#"><img src={Linkedin} alt=""></img></a>
                        <a href="#"><img src={Twitter} alt=""></img></a>
                        <a href="#"><img src={Whatsapp} alt=""></img></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section2;