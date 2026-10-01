export const templates = {
  home() {
    return `
      <section class="hero-section" aria-labelledby="hero-title">
        <h2 id="hero-title" style="color: var(--primary); font-size: 2rem; margin-bottom: 1rem;">Unindo forças por um mundo mais justo</h2>
        <p style="font-size: 1.15rem; margin-bottom: 1.5rem;">A ONG Mãos Solidárias apoia comunidades em situação de vulnerabilidade com capacitação profissional, doações e oficinas de inclusão produtiva.</p>
        <a href="#/cadastro" class="btn-primary">Quero Ser Voluntário</a>
      </section>
    `;
  },

  projetos() {
    return `
      <section aria-labelledby="proj-title">
        <h2 id="proj-title" style="color: var(--primary); font-size: 1.8rem; margin-bottom: 1rem;">Nossos Projetos Comunitários</h2>
        <div class="grid-cards">
          <article class="card">
            <h3>Educação do Futuro</h3>
            <p>Aulas de tecnologia básica, robótica e oficinas de reforço escolar para crianças e jovens.</p>
            <button class="btn-primary btn-ver-detalhes" data-projeto="Educação do Futuro">Ver Detalhes</button>
          </article>
          <article class="card">
            <h3>Cozinha Fraterna</h3>
            <p>Preparação e distribuição de refeições balanceadas e kits de higiene alimentar para famílias locais.</p>
            <button class="btn-primary btn-ver-detalhes" data-projeto="Cozinha Fraterna">Ver Detalhes</button>
          </article>
          <article class="card">
            <h3>Oficinas Profissionais</h3>
            <p>Cursos de marcenaria, artesanato e apoio na elaboração de currículos para jovens e adultos.</p>
            <button class="btn-primary btn-ver-detalhes" data-projeto="Oficinas Profissionais">Ver Detalhes</button>
          </article>
        </div>
      </section>
    `;
  },

  cadastro() {
    return `
      <section aria-labelledby="form-title" style="max-width: 600px; margin: 0 auto;">
        <h2 id="form-title" style="color: var(--primary); font-size: 1.8rem; margin-bottom: 1rem;">Cadastro de Voluntários</h2>
        <form id="form-cadastro" novalidate>
          <div class="form-group">
            <label for="campo-nome">Nome Completo *</label>
            <input type="text" id="campo-nome" class="form-control" required aria-required="true" aria-describedby="erro-nome">
            <span id="erro-nome" class="error-msg">Informe um nome válido (mínimo de 3 caracteres).</span>
          </div>

          <div class="form-group">
            <label for="campo-email">E-mail *</label>
            <input type="email" id="campo-email" class="form-control" required aria-required="true" aria-describedby="erro-email">
            <span id="erro-email" class="error-msg">Informe um endereço de e-mail válido.</span>
          </div>

          <div class="form-group">
            <label for="campo-tel">Telefone / WhatsApp *</label>
            <input type="tel" id="campo-tel" class="form-control" required aria-required="true" aria-describedby="erro-tel" placeholder="(11) 99999-9999">
            <span id="erro-tel" class="error-msg">Informe um telefone com DDD válido.</span>
          </div>

          <div class="form-group">
            <label for="campo-area">Área de Atuação de Interesse *</label>
            <select id="campo-area" class="form-control" required>
              <option value="educacao">Educação e Formação</option>
              <option value="alimentacao">Apoio Logístico e Refeições</option>
              <option value="tecnologia">Comunicação e Tecnologia</option>
            </select>
          </div>

          <button type="submit" class="btn-primary" style="width: 100%;">Finalizar Inscrição</button>
        </form>
      </section>
    `;
  }
};