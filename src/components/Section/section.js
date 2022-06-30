import './section.css'
import Service1 from './img/service1.png'
import Service2 from './img/service2.png'
import Service3 from './img/service3.png'


function Section() {
    return (
        <div>
            <section id="services">
                <div class="container text-center">
                    <h1 class="title">O QUE FAZEMOS?</h1>
                    <div class="row text-center">
                        <div class="col-md-4 services">
                            <img src={Service1} class="service-img"></img>
                                <h4>Mercado crescente</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum labore doloremque nisi aliquid.
                                    Ducimus blanditiis aut dicta sed ea ut omnis mollitia commodi similique? Repellat excepturi rem itaque
                                    nihil!</p>
                        </div>
                        <div class="col-md-4 services">
                            <img src={Service2} class="service-img"></img>
                                <h4>Vendas online</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum labore doloremque nisi aliquid.
                                    Ducimus blanditiis aut dicta sed ea ut omnis mollitia commodi similique? Repellat excepturi rem itaque
                                    nihil!</p>
                        </div>
                        <div class="col-md-4 services">
                            <img src={Service3} class="service-img"></img>
                                <h4>Propagandas animadas</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum labore doloremque nisi aliquid.
                                    Ducimus blanditiis aut dicta sed ea ut omnis mollitia commodi similique? Repellat excepturi rem itaque
                                    nihil!</p>
                        </div>

                    </div>
                    <button type="button" class="btn btn-primary">Todos Os Serviços</button>
                </div>
            </section>
        </div>
    );
}

export default Section;