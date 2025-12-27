const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

let count = 0;
const countBtn = document.getElementById("countBtn");
const counter = document.getElementById("counter");

countBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

const toggleBtn = document.getElementById("toggleBtn");
const hiddenText = document.getElementById("hiddenText");

toggleBtn.addEventListener("click", () => {
    hiddenText.classList.toggle("hidden");
});

const games = [
    {
        title: "Pac-Man",
        description: "Классическая аркадная игра 80-х с простыми правилами, ставшая самой узнаваемой видеоигрой.",
        image: "https://freepacman.org/images/pacman-game-card.png",
        category: "arcade"
    },
    {
        title: "Super Mario Bros",
        description: "Платформер, заложивший основы жанра, сделав революцию в глубине игрового опыта.",
        image: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/12/48/gaming-super-mario-bros-3.jpg?resize=980:*",
        category: "arcade"
    },
    {
        title: "Half-Life 2",
        description: "Революция в 3D и повествовании, один из самых громких проектов 2000-х.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/220/ss_47b4105b396de408cb8b6b4f358c69e5e2a62dae.1920x1080.jpg?t=1745368545",
        category: "3d"
    },
    {
        title: "GTA San Andreas",
        description: "Открытый мир и свобода действий.",
        image: "https://cdn2.unrealengine.com/egs-grandtheftautosanandreasthedefinitiveedition-rockstargames-g1a-00-1920x1080-db31e491c234.jpg",
        category: "3d"
    },
    {
        title: "The Last of Us",
        description: "Интерактивное кино с сильным повествованием и эмоциональным геймдизайном. Познакомила казуальную аудиторию с видеоиграми",
        image: "https://static.rozetked.me/imager/main/images/uploads/tD7GgN0jy0wQ.webp",
        category: "modern"
    },
    {
        title: "The Legend of Zelda Breath of the Wild",
        description: "Современный дизайн открытого мира. Эталон геймдизайна и повествования.",
        image: "https://miro.medium.com/1*G3Di-m1JW4QZ662rY8bd-g.jpeg",
        category: "modern"
    }
];

const container = document.getElementById("cardsContainer");

function renderCards(data) {
    container.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card-js";

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <button>Подробнее</button>
        `;

        const btn = card.querySelector("button");
        btn.addEventListener("click", () => openModal(item));

        container.appendChild(card);
    });
}

renderCards(games);

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;

        if (category === "all") {
            renderCards(games);
        } else {
            const filtered = games.filter(game => game.category === category);
            renderCards(filtered);
        }
    });
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

function openModal(item) {
    modalTitle.textContent = item.title;
    modalImage.src = item.image;
    modalDescription.textContent = item.description;
    modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});