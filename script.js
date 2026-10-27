// Datos de expedientes completos para Modales
const characterData = {
    dean: {
        name: "Dean Winchester",
        actor: "Jensen Ackles",
        status: "Cazador Leyenda",
        bio: "Nacido el 24 de enero de 1979 en Lawrence, Kansas. Tras presenciar la muerte de su madre a los 4 años, dedicó su vida a proteger a su hermano menor Sam y a cazar monstruos bajo la tutela de su padre.",
        weapons: "Pistola Colt M1911A1 grabada, Cuchillo de Demonio, Cuchilla Ángel, El Impala '67",
        quote: "Driver picks the music, shotgun shuts his cakehole."
    },
    sam: {
        name: "Sam Winchester",
        actor: "Jared Padalecki",
        status: "Cazador / Hombre de Letras",
        bio: "Nacido el 2 de mayo de 1983. Posee un intelecto superior e investigación académica impecable. Alimentado con sangre de demonio de bebé por Azazel, luchó toda su vida contra su predestinación a ser el recipiente de Lucifer.",
        weapons: "Escopeta con Sal Gema, Ordenador Portátil de Investigación, Cuchillo de Demonio",
        quote: "No matter how bad things get, we still have each other."
    },
    castiel: {
        name: "Castiel",
        actor: "Misha Collins",
        status: "Ángel del Señor",
        bio: "Entidad celestial que desafió a sus superiores en el Cielo por amor a la humanidad. Desarrolló un vínculo indestructible con Dean Winchester y se convirtió en parte fundamental de la familia.",
        weapons: "Espada Ángel (Angel Blade), Poderes Celestiales / Sanación",
        quote: "I'm the one who gripped you tight and raised you from perdition."
    },
    crowley: {
        name: "Crowley (Fergus MacLeod)",
        actor: "Mark A. Sheppard",
        status: "Ex-Rey del Infierno",
        bio: "Antiguo humano escocés del siglo XVII que vendió su alma por 3 pulgadas extra de estatura. En el infierno ascendió de Demonio de Encrucijada a Rey del Infierno mediante astucia y alianzas.",
        weapons: "Contratos de Sangre, Magia Infernal, Redes de Demonios",
        quote: "Hello, boys."
    },
    bobby: {
        name: "Robert 'Bobby' Steven Singer",
        actor: "Jim Beaver",
        status: "Cazador Veterano / Mentor",
        bio: "Se convirtió en cazador tras verse obligado a matar a su esposa poseída. Su vasta biblioteca de libros antiguos lo convirtió en el centro de inteligencia de todos los cazadores de Norteamérica.",
        weapons: "Escopetas, Caza de Información, Trampas Rúnicas",
        quote: "Family don't end with blood, boy."
    },
    jack: {
        name: "Jack Kline",
        actor: "Alexander Calvert",
        status: "Nephilim / Nuevo Dios",
        bio: "Hijo del arcángel Lucifer y la humana Kelly Kline. Adoptado por Sam, Dean y Castiel. Posee una inocencia infantil combinada con una fuerza cósmica capaz de reestructurar la realidad.",
        weapons: "Poder Cósmico de Nephilim",
        quote: "I like nougat."
    }
};

// Funcionalidad del Modal
function openModal(id) {
    const data = characterData[id];
    if (!data) return;

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="space-y-4 font-montserrat">
            <div class="border-b border-spn-gold/30 pb-3">
                <span class="text-xs text-spn-gold font-mono uppercase">${data.status}</span>
                <h3 class="font-cinzel text-3xl font-bold text-white">${data.name}</h3>
                <p class="text-xs text-spn-silver">Interpretado por: <span class="text-white">${data.actor}</span></p>
            </div>
            <div>
                <h4 class="font-cinzel text-sm text-spn-gold font-bold mb-1">Historia y Expediente:</h4>
                <p class="text-sm text-spn-silver leading-relaxed">${data.bio}</p>
            </div>
            <div>
                <h4 class="font-cinzel text-sm text-spn-gold font-bold mb-1">Armamento / Habilidades Preferidas:</h4>
                <p class="text-xs font-mono text-spn-light bg-spn-dark p-2 rounded border border-spn-gold/20">${data.weapons}</p>
            </div>
            <blockquote class="border-l-2 border-spn-red pl-3 text-sm italic text-spn-gold font-journal pt-2">
                "${data.quote}"
            </blockquote>
        </div>
    `;

    document.getElementById('characterModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('characterModal').classList.add('hidden');
}

// Filtro de Personajes
function filterCharacters(category, event) {
    const cards = document.querySelectorAll('.character-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.classList.remove('bg-spn-gold', 'text-black', 'font-bold');
        btn.classList.add('text-spn-light');
    });

    if (event && event.target) {
        event.target.classList.add('bg-spn-gold', 'text-black', 'font-bold');
    }

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Galería del Impala
function changeImpalaImage(src, caption) {
    const mainImg = document.getElementById('impalaMainImg');
    const captionTxt = document.getElementById('impalaCaption');
    mainImg.style.opacity = '0';
    setTimeout(() => {
        mainImg.src = src;
        captionTxt.innerText = caption;
        mainImg.style.opacity = '1';
    }, 200);
}

// Acordeón Lore
function toggleAccordion(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById(id + '-icon');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
    } else {
        content.classList.add('hidden');
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
    }
}

// Reproducción Real de Ambiente Sonoro
let isAudioPlaying = false;

function toggleAtmosphereAudio() {
    const btnText = document.getElementById('audioText');
    const btnIcon = document.getElementById('audioIcon');
    const audioPlayer = document.getElementById('spnSong'); // Obtiene la etiqueta <audio> de HTML

    // Verifica que el elemento <audio> exista en el HTML
    if (!audioPlayer) {
        console.error("No se encontró el elemento <audio id='spnSong'>");
        showToast("⚠️ Falta agregar el <audio id='spnSong'> en el HTML");
        return;
    }

    if (!isAudioPlaying) {
        // Si la canción terminó previamente, la reinicia al segundo 0
        if (audioPlayer.ended) {
            audioPlayer.currentTime = 0;
        }

        // Intenta reproducir la música
        audioPlayer.play().then(() => {
            isAudioPlaying = true;
            btnText.innerText = "Reproduciendo...";
            btnIcon.classList.replace('fa-music', 'fa-volume-high');
            showToast("🔊 Reproduciendo: Carry on Wayward Son");
        }).catch(error => {
            console.error("Error al reproducir audio:", error);
            showToast("⚠️ No se encuentra 'carry.mp3' en la misma carpeta");
        });
    } else {
        // Pausa la música
        audioPlayer.pause();
        isAudioPlaying = false;
        btnText.innerText = "Música de Ambiente";
        btnIcon.classList.replace('fa-volume-high', 'fa-music');
        showToast("🔇 Radio Apagada");
    }
}
function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-5 right-5 z-50 bg-spn-red text-white px-4 py-2 rounded shadow-lg font-cinzel text-xs border border-spn-gold';
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Menú Móvil
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        });
    }
});