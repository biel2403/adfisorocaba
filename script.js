const church = {
  name: "ADFi Sorocaba",
  initials: "ADFi",
  logo: "assets/logo.svg",
  bio: "Você é bem-vindo por aqui! \n Explore os links abaixo e conheça uma família que te acolhe.",
  address: "Avenida Doutor Ulysses Guimarães, 1160 - Parque das Laranjeiras.",
  services: ["Terça - 19:30h", "Quinta - 19:45h", "Domingo - 19:00h"],
  footer: "(c) 2026 ADFi Sorocaba. Todos os direitos reservados.",
  links: [
    {
      title: "WhatsApp da igreja",
      description: "Fale com nossa equipe",
      icon: "whatsapp",
      image: "",
      url: "https://wa.me/5500000000000",
    },
    {
      title: "Como chegar no templo",
      icon: "map",
      image: "",
      url: "https://maps.app.goo.gl/SQrX3kKYsFhqWZq26",
    },
    {
      title: "Pedidos de oração",
      description: "Envie seu pedido para intercessão",
      icon: "prayer",
      image: "",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeLjkpvQpN3zl24oS0g19hgTnP_x3kGJbXOQWyOd_mwhVW7DQ/viewform?usp=publish-editor",
    },
    {
      title: "Contribuição / PIX",
      description: "Ofertas, dízimos e missões",
      icon: "pix",
      image: "",
      url: "https://seulinkdepagamento.com",
    },
    {
      title: "YouTube",
      description: "Cultos, mensagens e transmissões",
      icon: "youtube",
      image: "",
      url: "https://www.youtube.com/@ADFiSorocabaOficial",
    },
    {
      title: "Fotos dos cultos",
      description: "Acesse os registros no Drive",
      icon: "drive",
      image: "",
      url: "https://drive.google.com/",
    },
    {
      title: "Instagram",
      description: "Acompanhe nossa programação",
      icon: "instagram",
      image: "",
      url: "https://www.instagram.com/adfisorocaba/",
    },
     {
      title: "Facebook",
      description: "Curta nossa pagina",
      icon: "facebook",
      image: "",
      url: "https://www.facebook.com/adfisorocaba",
    },
  ],
};

const linksList = document.querySelector("#links-list");
const toast = document.querySelector("#toast");
const icons = {
  whatsapp: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19.2 6 16a7.3 7.3 0 1 1 2.4 2.1L5 19.2Z" />
      <path d="M9 8.8c.3 2.9 2.4 5 5.2 6.1l1.5-1.5 2.3 1.2c-.3 1.4-1.1 2.2-2.4 2.2-3.8 0-8.4-4.6-8.4-8.4 0-1.3.8-2.1 2.2-2.4l1.2 2.3L9 8.8Z" />
    </svg>
  `,
  map: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  `,
  prayer: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v16" />
      <path d="M7 9h10" />
    </svg>
  `,
  pix: `
    <svg class="coin-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.2v9.6" />
      <path d="M15 9.2c-.7-.7-1.7-1.1-3-1.1-1.6 0-2.8.8-2.8 2 0 1.4 1.3 1.8 2.8 2 1.5.2 2.8.6 2.8 2 0 1.2-1.2 2-2.8 2-1.3 0-2.4-.4-3.1-1.2" />
    </svg>
  `,
  youtube: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="m10 9.5 5 2.5-5 2.5v-5Z" />
    </svg>
  `,
  drive: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.2 4.5h5.6l6.2 10.8-2.8 4.2H5.8L3 15.3 9.2 4.5Z" />
      <path d="M9.2 4.5 15.4 15.3" />
      <path d="M14.8 4.5 8.6 15.3" />
      <path d="M3 15.3h18" />
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.3" />
      <path d="M17.3 7.2h.01" />
    </svg>
  `,
  facebook: `
    <svg class="facebook-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 8.3h-1.3c-.8 0-1.2.5-1.2 1.3v1.5H14l-.4 2.5h-1.9V18H9.1v-4.4H7.4v-2.5h1.7V9.4c0-2.2 1.3-3.6 3.5-3.6.7 0 1.4.1 1.6.1v2.4Z" />
    </svg>
  `,
};

function renderProfile() {
  document.title = `${church.name} | Links oficiais`;
  document.querySelector("#church-name").textContent = church.name;
  const avatar = document.querySelector(".avatar");
  const logo = document.querySelector("#church-logo");
  const initials = document.querySelector(".avatar span");

  initials.textContent = church.initials;
  if (church.logo) {
    logo.src = church.logo;
    avatar.classList.add("has-logo");
  } else {
    logo.removeAttribute("src");
    avatar.classList.remove("has-logo");
  }

  document.querySelector(".bio").textContent = church.bio;
  document.querySelector("#church-address").textContent = church.address;
  document.querySelector("#footer-text").textContent = church.footer;

  const serviceStrip = document.querySelector(".service-strip");
  serviceStrip.innerHTML = church.services
    .map((service) => `<span>${service}</span>`)
    .join("");
}

function renderLinks() {
  linksList.innerHTML = church.links
    .map(
      (link) => `
        <a class="link-card" href="${link.url}" target="_blank" rel="noopener noreferrer">
          ${getLinkVisual(link)}
          <span class="link-title">${link.description || link.title}</span>
        </a>
      `,
    )
    .join("");
}

function getLinkVisual(link) {
  if (link.image) {
    return `
      <span class="link-icon is-image" aria-hidden="true">
        <img src="${link.image}" alt="" />
      </span>
    `;
  }

  return `
    <span class="link-icon" aria-hidden="true">
      ${icons[link.icon] || icons.map}
    </span>
  `;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

async function sharePage() {
  const shareData = {
    title: church.name,
    text: `Links oficiais - ${church.name}`,
    url: window.location.href,
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard.writeText(window.location.href);
  showToast("Link copiado para a área de transferência.");
}

document.querySelector("#share-button").addEventListener("click", () => {
  sharePage().catch(() => showToast("Não foi possível compartilhar agora."));
});

renderProfile();
renderLinks();
