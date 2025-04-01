import "./TextoContato.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import zapmaria from "../../../assets/zapmaria.png";
import zapmateus from "../../../assets/zapmateus.png";
import insta from "../../../assets/insta.png";
import face from "../../../assets/face.png";
import mail from "../../../assets/mail.png";

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
            <a
              href="https://wa.me/+5516991564372"
              target="_blank"
              className="whatsapp"
            >
              <i className="bi bi-whatsapp"></i> WhatsApp - Maria Mamud
            </a>
            <a
              href="https://wa.me/+5516991852605"
              target="_blank"
              className="whatsapp"
            >
              <i className="bi bi-whatsapp"></i> WhatsApp - Mateus Gama
              Rodrigues
            </a>
            <a
              href="https://www.instagram.com/espacocrescerstz"
              target="_blank"
              className="instagram"
            >
              <i className="bi bi-instagram"></i> Instagram
            </a>
            <a
              href="https://www.facebook.com/Crescerstz"
              target="_blank"
              className="facebook"
            >
              <i className="bi bi-facebook"></i> Facebook
            </a>
            <a href="mailto:atendimento@espacocrescer.com.br" className="email">
              <i className="bi bi-envelope"></i> E-mail
            </a>
            {/*
            <span className="telefone">
              <i className="bi bi-telephone"></i> (XX) XXXX-XXXX
            </span>
            */}
          </div>

          {/* Ícones das redes sociais */}
          {/*
          <div className="redes-sociais">
            <a href="https://wa.me/+5516991564372" target="_blank">
              <img
                src={zapmaria}
                alt="WhatsApp Maria"
                className="icone-social"
              />
            </a>
            <a href="https://wa.me/+5516991852605" target="_blank">
              <img
                src={zapmateus}
                alt="WhatsApp Mateus"
                className="icone-social"
              />
            </a>
            <a
              href="https://www.instagram.com/espacocrescerstz"
              target="_blank"
            >
              <img src={insta} alt="Instagram" className="icone-social" />
            </a>
            <a href="https://www.facebook.com/Crescerstz" target="_blank">
              <img src={face} alt="Facebook" className="icone-social" />
            </a>
            <a href="mailto:atendimento@spacocrescer.com.br">
              <img src={mail} alt="E-mail" className="icone-social" />
            </a>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}

export default TextoContato;
