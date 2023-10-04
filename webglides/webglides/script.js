// Für die Karussell-Animation
let testimonials = [
    { name: 'Kunde 1', text: 'Großartiger Service!' },
    { name: 'Kunde 2', text: 'Sehr zufrieden!' },
    { name: 'Kunde 3', text: 'Kann ich nur empfehlen!' },
];

let currentTestimonial = 0;

let bildindex = 1;  // Initialisierung der Variable außerhalb der Funktion

function displayTestimonial(index) {
    const slider = document.getElementById('testimonial-slider');
    const testimonial = testimonials[index];
    slider.innerHTML = `
        <div class="transition-all ease-in-out duration-300">
            <h2 class="text-2xl font-bold">${testimonial.name}</h2>
            <img class="test" src="man${bildindex}.jpg" alt="Zitat" >
            <p>${testimonial.text}</p>
        </div>
    `;

    // Bildindex erhöhen und zurücksetzen, wenn es 3 überschreitet
    bildindex++;
    if (bildindex > 3) {
        bildindex = 1;
    }
}



// Initialer Zustand und Intervall
displayTestimonial(currentTestimonial);
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    displayTestimonial(currentTestimonial);
}, 3000);
