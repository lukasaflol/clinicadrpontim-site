export default function App() {
  const CLINIC_NAME = "Clínica Dr. Pontim";
  const SLOGAN = "O padrão que seu sorriso merece";
  const ADDRESS = "Rua Engenheiro João Alfredo, 1562 Altos, Centro, Caucaia - CE. CEP 61600-050";
  const PHONE = "(85) 99816-2118";
  const EMAIL = "contato@clinicadrpontim.com.br";
  const WHATSAPP_NUMBER = "5585998162118";

  function waHref(message = "Olá! Gostaria de agendar uma avaliação.") {
    const txt = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${txt}`;
  }

  function handleLeadForm(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = form.nome.value;
    const telefone = form.telefone.value;
    const interesse = form.interesse.value;
    const msg = `Olá! Meu nome é ${nome}. Telefone: ${telefone}. Tenho interesse em ${interesse}. Podemos agendar uma avaliação?`;
    window.open(waHref(msg), "_blank");
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <img src="/logo-dr-pontim.png" alt="Logo Clínica Dr. Pontim" className="h-10" />
            <div>
              <div className="font-semibold leading-tight group-hover:text-sky-700 transition-colors">{CLINIC_NAME}</div>
              <div className="text-xs text-slate-500">Odontologia & Estética</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicos" className="hover:text-sky-700">Serviços</a>
            <a href="#equipe" className="hover:text-sky-700">Equipe</a>
            <a href="#avaliacoes" className="hover:text-sky-700">Avaliações</a>
            <a href="#faq" className="hover:text-sky-700">FAQ</a>
            <a href="#contato" className="hover:text-sky-700">Contato</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={waHref()} className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium shadow">
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {SLOGAN}
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Odontologia de alta performance em Caucaia há <span className="font-semibold text-slate-800">+40 anos</span>,
              com foco em resultado, conforto e estética natural.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-white border text-slate-700 text-sm">Atendimento humanizado</span>
              <span className="px-3 py-1 rounded-full bg-white border text-slate-700 text-sm">Equipe multidisciplinar</span>
              <span className="px-3 py-1 rounded-full bg-white border text-slate-700 text-sm">Tecnologia em diagnóstico</span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={waHref()} className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow">
                Quero minha avaliação
              </a>
              <a href="#servicos" className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-white">
                Ver serviços
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1">
                ⭐⭐⭐⭐⭐ 4.9/5 (Google) — <em>Excelência comprovada</em>
              </span>
            </div>
          </div>
          <div className="md:pl-10">
            <img src="/equipe-dr-pontim.jpg" alt="Equipe Clínica Dr. Pontim" className="rounded-2xl border shadow-sm" />
          </div>
        </div>
      </section>

      <section id="servicos" className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Principais serviços</h2>
          <a href={waHref("Olá! Tenho interesse em um dos serviços. Pode me orientar?")} className="text-sky-700 hover:underline">Falar com atendente →</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {title: "Implantes Dentários", bullets: ["Carga imediata quando indicado", "Planejamento 3D", "Pós-operatório confortável"]},
            {title: "Facetas & Lentes de Contato", bullets: ["Resina ou porcelana", "Estética natural", "Sorriso renovado"]},
            {title: "Próteses Dentárias", bullets: ["Parciais e totais", "Funcionalidade e estética", "Durabilidade"]},
            {title: "Botox & Harmonização", bullets: ["Botox, preenchimento", "Dra. Bruna Franca", "Naturalidade nos resultados"]},
          ].map((srv) => (
            <div key={srv.title} className="rounded-2xl bg-white border shadow-sm p-6">
              <div className="text-xl font-semibold">{srv.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
                {srv.bullets.map((b) => (<li key={b}>{b}</li>))}
              </ul>
              <div className="mt-5">
                <a href={waHref(`Olá! Tenho interesse em ${srv.title}. Como funciona?`)} className="text-sky-700 font-medium hover:underline">Quero saber mais →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="equipe" className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Nossa equipe</h2>
          <p className="mt-2 text-slate-600">Time experiente e focado em resultados.</p>
          <img src="/equipe-dr-pontim.jpg" alt="Equipe Clínica Dr. Pontim" className="rounded-2xl border shadow-sm" />
        </div>
      </section>

      <section id="avaliacoes" className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Avaliações dos pacientes</h2>
            <p className="mt-1 text-slate-600">Excelência refletida em cada atendimento.</p>
          </div>
          <a href="https://www.google.com/maps/place/Cl%C3%ADnica+Dr.+Pontim" target="_blank" className="text-sky-700 hover:underline">Ver no Google →</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {["Atendimento impecável!", "Resultado acima do esperado.", "Clínica linda e equipe atenciosa."].map((txt, i) => (
            <div key={i} className="rounded-2xl bg-white border shadow-sm p-6">
              <div className="text-yellow-500">★★★★★</div>
              <p className="mt-2 text-sm text-slate-700">{txt}</p>
              <div className="mt-3 text-xs text-slate-500">Paciente verificado</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Fale com a gente</h2>
            <p className="mt-2 text-slate-600">Tire dúvidas e agende sua avaliação.</p>
            <form onSubmit={handleLeadForm} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium">Nome</label>
                <input name="nome" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium">Telefone</label>
                <input name="telefone" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="(85) 9 xxxx-xxxx" />
              </div>
              <div>
                <label className="block text-sm font-medium">Interesse</label>
                <select name="interesse" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600">
                  <option>Implantes</option>
                  <option>Facetas</option>
                  <option>Próteses</option>
                  <option>Botox & Harmonização</option>
                </select>
              </div>
              <button type="submit" className="w-full md:w-auto px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow">
                Enviar no WhatsApp
              </button>
            </form>
            <div className="mt-6 text-sm text-slate-600 space-y-1">
              <div><span className="font-medium">Tel:</span> {PHONE}</div>
              <div><span className="font-medium">E-mail:</span> {EMAIL}</div>
              <div><span className="font-medium">Endereço:</span> {ADDRESS}</div>
              <div><span className="font-medium">Horário:</span> Seg–Sex 08:00–18:00 • Sáb 08:00–12:00</div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Como chegar</h3>
            <div className="mt-3 aspect-video w-full rounded-2xl border shadow-sm overflow-hidden bg-slate-100 grid place-items-center">
              <iframe
                title="Mapa Clínica Dr. Pontim"
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            © {new Date().getFullYear()} {CLINIC_NAME}. Todos os direitos reservados.
          </div>
          <div className="text-xs text-slate-500">
            Informações neste site têm caráter informativo e não substituem consulta com profissional habilitado.
          </div>
        </div>
      </footer>
    </div>
  );
}
