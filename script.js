function Menu() {
    let menu = document.querySelector('.d3');
    let nav = document.querySelector('.navi');
    let spans = menu.getElementsByTagName('span');

    if (menu.classList.contains('open')) {
        //TODO Refactor Span logic
        spans[0].style.transform = "translateY(-400%)";
        spans[2].style.transform = "translateY(400%)";
        menu.classList.remove('open');
        nav.classList.remove('open');
        /*TODO Rework closeNav functionality*/
        document.querySelector('.closeNav').style.background = 'transparent'
        document.querySelector('.closeNav').setAttribute("pointer-events", "none")
    }
    else {
        //TODO Refactor Span logic
        spans[0].style.transform = "translateY(0)";
        spans[2].style.transform = "translateY(0)";
        menu.classList.add('open');
        nav.classList.add('open');
        nav.style.width = 'auto';
        /*TODO Rework closeNav functionality*/
        document.querySelector('.closeNav').style.background = 'rgba(0,0,0,.7)';
        document.querySelector('.closeNav').setAttribute("pointer-events", "all");
    }
};

function UserMenu() {
    let menu = document.querySelector('.UNavi');

    if (menu.classList.contains('UNaviOpen')) {
        menu.classList.remove('UNaviOpen')
    }
    else {
        menu.classList.add('UNaviOpen')
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.getElementById('carousel-inner');
    const descriptionHeader = document.getElementById('description-header');
    const descriptionParagraph = document.getElementById('description-paragraph');
    const buttonContainer = document.getElementById('button-container');

    const imageFolder = 'images/';
    const imagePrefix = 'Picture';
    const imageExtension = '.jpg';
    const totalImages = 14;

    const images = [
        { src: `${imageFolder}${imagePrefix}1${imageExtension}`, header: 'Modular Synthesizer Eurorack Setup', desc: 'A modular synthesizer system with multiple rows of Eurorack modules mounted in a wooden case. Each module has knobs, switches, and patch points for creating and manipulating sounds. The setup includes various types of modules from brands like Mutable Instruments, Intellijel, and Doepfer. It is designed for detailed sound creation and dynamic audio processing.' },
        { src: `${imageFolder}${imagePrefix}2${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        { src: `${imageFolder}${imagePrefix}3${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        { src: `${imageFolder}${imagePrefix}4${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        { src: `${imageFolder}${imagePrefix}5${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        { src: `${imageFolder}${imagePrefix}6${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        { src: `${imageFolder}${imagePrefix}7${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        { src: `${imageFolder}${imagePrefix}8${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        { src: `${imageFolder}${imagePrefix}9${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        { src: `${imageFolder}${imagePrefix}10${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        { src: `${imageFolder}${imagePrefix}11${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        { src: `${imageFolder}${imagePrefix}12${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        { src: `${imageFolder}${imagePrefix}13${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        { src: `${imageFolder}${imagePrefix}14${imageExtension}`, header: 'Behringer 2600 and Odyssey Synthesizers', desc: 'The Behringer 2600, an analog semi-modular synth modeled after the classic ARP 2600, and the Behringer Odyssey, a keyboard synthesizer inspired by the ARP Odyssey. Both synths feature multiple sliders, switches, and patch points for in-depth sound manipulation. The setup is ideal for producing vintage-style analog tones and experimenting with modular-style sound design.' },
        // Add additional images here with headers and descriptions
    ];

    carouselInner.style.display = 'flex';
    carouselInner.style.width = `${totalImages * 100}%`; // Adjust width to accommodate all images

    for (let i = 0; i < totalImages; i++) {
        const imageUrl = `${imageFolder}${imagePrefix}${i + 1}${imageExtension}`;

        const carouselItem = document.createElement('a');
        carouselItem.role = 'link';
        carouselItem.title = `Picture ${i + 1}`;
        carouselItem.className = 'caro';
        carouselItem.style.flex = '0 0 100%';
        carouselItem.style.boxSizing = 'border-box';
        carouselItem.innerHTML = `<div class="d13" style="background: url('${imageUrl}') no-repeat center center; background-position: cover;  "></div>`;
        carouselInner.appendChild(carouselItem);

        const button = document.createElement('button');
        button.className = 'button';
        if (i === 0) button.classList.add('Selected');
        button.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
        buttonContainer.appendChild(button);
    }

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateSelectedButton(currentIndex);
        updateDescription(currentIndex);
    }

    function updateSelectedButton(index) {
        const buttons = buttonContainer.getElementsByClassName('button');
        Array.from(buttons).forEach((btn, i) => {
            btn.classList.toggle('Selected', i === index);
        });
    }

    function updateDescription(index) {
        descriptionHeader.innerText = images[index].header;
        descriptionParagraph.innerText = images[index].desc;
    }

    let currentIndex = 0;
    updateDescription(currentIndex);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 5000);
});
