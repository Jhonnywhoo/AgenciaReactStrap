import './footer.css'
import Wave2 from './img/wave2.png'
import Demologo from './img/demo-logo.png'

function Footer() {
    return (
        <div>
            <section id="footer">
                <img src={Wave2} class="footer-img"></img>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 footer-box">
                            <img src={Demologo}></img>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos vel, incidunt vero sequi nihil sint repellendus perferendis, odit possimus, porro officia eaque molestias rerum. Dolor, doloribus nemo! Rerum, pariatur?
                            </p>
                        </div>
                        <div class="col-md-4 footer-box">

                            <p><b>CONTATE-NOS</b></p>
                            <p> Senac Lapa Tito, Lapa, SP</p>
                            <p> +55 11 912345678</p>
                            <p> jhonnywobrito@gmail.com</p>
                        </div>
                        <div class="col-md-4 footer-box">

                            <p><b>NEWSLETTER</b></p>
                            <input type="email" class="form-control" placeholder="Seu e-mail"></input>
                            <button type="button" class="btn-primary">Inscrever-se</button>
                        </div>
                    </div>
                    <hr></hr>
                    <p class="copyright">Website em Bootstrap por Easy Tutorials - em React por Jhonny Brito</p>
                </div>
            </section>
        </div>
    );
}

export default Footer;