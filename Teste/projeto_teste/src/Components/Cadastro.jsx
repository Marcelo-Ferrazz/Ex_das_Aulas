import "./Cadastro.css";

const Cadastro = () => {
  return (
    <section>
      <h1 class="heading text-center">CONTATO</h1>
      <label class="form-label">Nome Completo</label>
      <input type="text" class="form-control" />
      <label class="form-label">E-mail</label>
      <input type="email" class="form-control" />
      <label class="form-label">Contato</label>
      <input type="number" class="form-control" />
      <select
        class="btn btn-secodary text-bg-secondary"
        name="option"
        id="option"
        required>
        <option value="duv">Dúvidas</option>
        <option value="elo">Elogios</option>
        <option value="cri">Críticas</option>
        <option value="other">Outros</option>
      </select>

      <textarea
        class="form-control"
                placeholder="Adicione uma Mensagem"
      ></textarea>
      <input class="btn text-bg-secondary" type="submit" placeholder="Enviar" />

      <h1>ENDEREÇOS</h1>
      <p>Sede: Rua das Municipalidades, 191, Ipiranga, São Paulo - SP</p>
      <p>
        Showroom Campinas: Av. José de Souza Campos, 2335, Cambui, Campinas - SP
      </p>
      <p>contato@exclusivagroup.com.br</p>
      <h1>Telefones</h1>
      <p>(11) 3372-8800 &#x1F4DE;</p>
      <p>(11) 98058-0289 &#x1F4F2;</p>
      <br></br>
    </section>
  );
};

export default Cadastro;
