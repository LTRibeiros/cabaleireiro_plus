import { useState } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Scissors,
  X,
  Quote,
  Phone
} from 'lucide-react';

import {
  services,
  reviews,
  barbers,
  gallery
} from './data/barberia';

const WA =
  'https://wa.me/5511999999999?text=Olá!%20Quero%20agendar%20um%20horário%20na%20Barbearia%20Vidigal.';

const go = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  });

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a className="brand" href="#inicio">
        <span className="brand-mark">V</span>

        <span>
          VIDIGAL
          <small>BARBEARIA</small>
        </span>
      </a>

      <nav className={open ? 'nav open' : 'nav'}>
        {[
          ['servicos', 'Serviços'],
          ['sobre', 'A barbearia'],
          ['galeria', 'Galeria'],
          ['avaliacoes', 'Avaliações']
        ].map(([id, text]) => (
          <button
            key={id}
            onClick={() => {
              go(id);
              setOpen(false);
            }}
          >
            {text}
          </button>
        ))}

        <a className="nav-cta" href={WA}>
          Agendar
          <ArrowUpRight size={16} />
        </a>
      </nav>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...reviews, ...reviews].map((review, index) => (
          <div className="ticker-item" key={index}>
            <span className="stars">★★★★★</span>

            <strong>{review.name}</strong>

            <span>“{review.text}”</span>

            <i>Google</i>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <img
        className="hero-img"
        src="/img/hero-equipe.jpg"
        alt="Equipe da Barbearia Vidigal"
      />

      <div className="hero-overlay" />

      <div className="hero-content container">
        <div className="eyebrow">
          <span />
          BARBEARIA DESDE 2018
        </div>

        <h1>
          Seu estilo.
          <br />
          <em>Sua assinatura.</em>
        </h1>

        <p>
          Mais que um corte. Uma experiência feita para quem valoriza
          presença, detalhe e personalidade.
        </p>

        <div className="hero-actions">
          <a className="btn primary" href={WA}>
            <CalendarDays size={18} />
            Agendar horário
          </a>

          <a className="btn ghost" href="#servicos">
            Conhecer serviços
            <ChevronRight size={17} />
          </a>
        </div>

        <div className="hero-proof">
          <div>
            <strong>4,9</strong>

            <span>
              <span className="stars">★★★★★</span> no Google
            </span>
          </div>

          <div className="proof-line" />

          <div>
            <strong>+5 mil</strong>
            <span>clientes atendidos</span>
          </div>
        </div>
      </div>

      <div className="scroll">
        SCROLL
        <span />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container">

        <div className="section-head">
          <div>
            <div className="eyebrow dark">
              <span />
              SERVIÇOS
            </div>

            <h2>O clássico bem feito.</h2>
          </div>

          <p>
            Do corte tradicional ao visual mais atual, cada serviço é
            pensado para entregar acabamento impecável.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article
              className="service-card"
              key={service.name}
            >
              <div className="service-number">
                0{index + 1}
              </div>

              <div className="service-icon">
                <Scissors size={22} />
              </div>

              <h3>{service.name}</h3>

              <p>{service.desc}</p>

              <div className="service-bottom">
                <span>{service.price}</span>

                <small>
                  <Clock3 size={14} />
                  {service.time}
                </small>
              </div>
            </article>
          ))}
        </div>

        <div className="center">
          <a className="text-link" href={WA}>
            Quero agendar
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="sobre">

      <div className="about-image">
        <img
          src="/img/about.jpg"
          alt="Interior da barbearia"
        />

        <div className="image-tag">
          <span>DESDE</span>
          <strong>2018</strong>
        </div>
      </div>

      <div className="about-copy">

        <div className="eyebrow dark">
          <span />
          A BARBEARIA
        </div>

        <h2>
          Tradição no corte.
          <br />
          <em>Atitude no estilo.</em>
        </h2>

        <p>
          A Vidigal nasceu com uma ideia simples: transformar o momento
          do corte em uma experiência. Um espaço masculino, confortável
          e sem pressa, onde técnica e personalidade andam juntas.
        </p>

        <div className="checks">
          {[
            'Profissionais especializados',
            'Produtos de alta qualidade',
            'Ambiente confortável',
            'Atendimento personalizado'
          ].map((item) => (
            <div key={item}>
              <Check size={15} />
              {item}
            </div>
          ))}
        </div>

        <a className="btn dark" href={WA}>
          Falar com a barbearia
          <ArrowUpRight size={17} />
        </a>

      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section
      className="section gallery-section"
      id="galeria"
    >
      <div className="container">

        <div className="section-head">
          <div>
            <div className="eyebrow dark">
              <span />
              NOSSO TRABALHO
            </div>

            <h2>Feito nos detalhes.</h2>
          </div>

          <a
            className="social-link"
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>◎</span>
            @barbeariavidigal
          </a>
        </div>

        <div className="gallery">
          {gallery.map((src, index) => (
            <div
              className={`gallery-item g${index + 1}`}
              key={src}
            >
              <img
                src={src}
                alt={`Trabalho da barbearia ${index + 1}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Barbers() {
  return (
    <section className="barbers">

      <div className="container">

        <div className="section-head light">

          <div>
            <div className="eyebrow">
              <span />
              NOSSO TIME
            </div>

            <h2>Quem faz acontecer.</h2>
          </div>

          <p>
            Experiência, técnica e atenção aos detalhes em cada
            atendimento.
          </p>

        </div>

        <div className="barber-grid">
          {barbers.map((barber) => (
            <article
              className="barber"
              key={barber.name}
            >
              <img
                src={barber.image}
                alt={barber.name}
              />

              <div className="barber-info">
                <span>{barber.role}</span>
                <h3>{barber.name}</h3>
                <p>{barber.bio}</p>
                <small>{barber.specialty}</small>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section
      className="section reviews"
      id="avaliacoes"
    >

      <div className="container">

        <div className="review-top">

          <div>
            <div className="eyebrow dark">
              <span />
              QUEM JÁ PASSOU POR AQUI
            </div>

            <h2>Palavra de quem conhece.</h2>
          </div>

          <div className="google-score">

            <div className="google-g">
              G
            </div>

            <div>
              <strong>
                4,9
                <span className="stars">
                  ★★★★★
                </span>
              </strong>

              <small>
                +300 avaliações no Google
              </small>
            </div>

          </div>

        </div>

        <div className="review-grid">

          {reviews.slice(0, 3).map((review) => (
            <article
              className="review"
              key={review.name}
            >

              <Quote size={24} />

              <p>
                “{review.text}”
              </p>

              <div>
                <strong>
                  {review.name}
                </strong>

                <small>
                  {review.date} ·
                  <span className="stars">
                    ★★★★★
                  </span>
                </small>
              </div>

            </article>
          ))}

        </div>

        <div className="center">
          <a
            className="btn outline"
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
          >
            Ver avaliações no Google
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="location">

      <div className="container location-grid">

        <div>

          <div className="eyebrow">
            <span />
            ONDE ESTAMOS
          </div>

          <h2>
            Seu próximo corte
            <br />
            <em>está logo ali.</em>
          </h2>

          <div className="location-info">

            <div>
              <MapPin />

              <span>
                <strong>
                  Rua Vidigal, 120
                </strong>

                <small>
                  São Paulo — SP
                </small>
              </span>
            </div>

            <div>
              <Clock3 />

              <span>
                <strong>
                  Seg — Sáb
                </strong>

                <small>
                  09:00 — 20:00
                </small>
              </span>
            </div>

            <div>
              <Phone />

              <span>
                <strong>
                  (11) 99999-9999
                </strong>

                <small>
                  WhatsApp
                </small>
              </span>
            </div>

          </div>

          <a
            className="btn primary"
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            Abrir no Google Maps
            <ArrowUpRight size={17} />
          </a>

        </div>

        <div className="map-placeholder">

          <div className="map-grid" />

          <div className="map-pin">
            <MapPin size={26} />
          </div>

          <span>
            MAPA DA REGIÃO
          </span>

        </div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>

      <div className="container footer-grid">

        <div>

          <div className="brand">

            <span className="brand-mark">
              V
            </span>

            <span>
              VIDIGAL
              <small>
                BARBEARIA
              </small>
            </span>

          </div>

          <p>
            Estilo que marca. Desde 2018.
          </p>

        </div>

        <div className="footer-links">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">A barbearia</a>
          <a href="#galeria">Galeria</a>
          <a href="#avaliacoes">Avaliações</a>
        </div>

        <a
          className="footer-wa"
          href={WA}
        >
          <MessageCircle />
          Agendar pelo WhatsApp
        </a>

      </div>

      <div className="container copyright">

        <span>
          © 2026 Barbearia Vidigal.
          Projeto demonstrativo de portfólio.
        </span>

        <span>
          Feito com React + Vite
        </span>

      </div>

    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Ticker />
        <Services />
        <About />
        <Gallery />
        <Barbers />
        <Reviews />
        <Location />
      </main>

      <Footer />

      <a
        className="floating-wa"
        href={WA}
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
}