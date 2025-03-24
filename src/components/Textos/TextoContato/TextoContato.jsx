import "./TextoContato.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function TextoContato() {
  return (
    <div className="mae-textocontato">
      <div className="container-textocontato">
        <div className="painel-textocontato">
          <h1 className="h1-textocontato-1">Entre</h1>
          <h1 className="h1-textocontato-1">em</h1>
          <h1 className="h1-textocontato-1">contato</h1>
          <h1 className="h1-textocontato-1">conosco</h1>
          <h1 className="h1-textocontato-2">!</h1>
        </div>

        <div className="informacoes-textocontato">
          <div className="contato-textocontato">
            <h1 className="h1-contatotexto-3">
              Você pode entrar em contato conosco por:
            </h1>
            <a href="https://wa.me/+5516991564372" target="_blank" className="whatsapp">
              <i className="bi bi-whatsapp"></i> WhatsApp - Maria Mamud
            </a>
            <a href="https://wa.me/+5516991852605" target="_blank" className="whatsapp">
              <i className="bi bi-whatsapp"></i> WhatsApp - Mateus Gama Rodrigues
            </a>
            <a href="https://www.instagram.com/espacocrescerstz" target="_blank" className="instagram">
              <i className="bi bi-instagram"></i> Instagram
            </a>
            <a href="https://www.facebook.com/Crescerstz" target="_blank" className="facebook">
              <i className="bi bi-facebook"></i> Facebook
            </a>
            <a href="mailto:atendimento@spacocrescer.com.br" className="email">
              <i className="bi bi-envelope"></i> E-mail
            </a>
            <span className="telefone">
              <i className="bi bi-telephone"></i> (XX) XXXX-XXXX
            </span>
          </div>

          <div className="redes-sociais">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextoContato;
