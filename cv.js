const form = document.getElementById('form-cv');
const cv = document.getElementById('cv');

form.addEventListener('submit', function(e) {
    e.preventDefault();

  /* INFORMATION PERSONNELLE */

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;

    /* Formation Scolaire */

    const Diplome1 = document.getElementById('Diplome1').value;
    const date_debut1 = document.getElementById('date_debut1').value;
    const date_fin1 = document.getElementById('date_fin1').value;
    const Diplome2 = document.getElementById('Diplome2').value;
    const date_debut2 = document.getElementById('date_debut2').value;
    const date_fin2 = document.getElementById('date_fin2').value;
    const Diplome3 = document.getElementById('Diplome3').value;
    const date_debut3 = document.getElementById('date_debut3').value;
    const date_fin3 = document.getElementById('date_fin3').value;

    /* Domaine de competence */

    const d1 = document.getElementById('d1').value;
    const d2 = document.getElementById('d2').value;
    const d3 = document.getElementById('d3').value;
    const d4 = document.getElementById('d4').value;

    /* Expérience professionnelle */

    const poste = document.getElementById('poste').value;
    const entreprise = document.getElementById('entreprise').value;
    const date_debut4 = document.getElementById('date_debut4').value;
    const date_fin4 = document.getElementById('date_fin4').value;
    const poste1 = document.getElementById('poste1').value;
    const entreprise1 = document.getElementById('entreprise1').value;
    const date_debut5 = document.getElementById('date_debut5').value;
    const date_fin5 = document.getElementById('date_fin5').value;
    const poste2 = document.getElementById('poste2').value;
    const entreprise2 = document.getElementById('entreprise2').value;
    const date_debut6 = document.getElementById('date_debut6').value;
    const date_fin6 = document.getElementById('date_fin6').value;
    /* Certification */

    const c1 = document.getElementById('c1').value;
    const c2 = document.getElementById('c2').value;
    const c3 = document.getElementById('c3').value;
    const c4 = document.getElementById('c4').value;
    /* Langue et loisir */

    const l1 = document.getElementById('l1').value;
    const l2 = document.getElementById('l2').value;
    const l3 = document.getElementById('l3').value;
    const l4 = document.getElementById('l4').value;


    cv.innerHTML = `
    
        <p>${nom} ${prenom}</p>
        <p><strong>email:</strong> ${email}</p>
        <p><strong>address:</strong> ${address}</p>
        <p><strong>telephone:</strong> ${telephone}</p>
        <br>
        <br>
        <h2>Curriculum vitae</h2>
        <br>
        
        <h2>Formation scolaire</h2>
        <br>

        <p>${Diplome1}</p>
        <p><strong></strong> ${date_debut1} - ${date_fin1}</p>
        <p>${Diplome2}</p>
        <p><strong></strong> ${date_debut2} - ${date_fin2}</p>
        <p>${Diplome3}</p>
        <p><strong></strong> ${date_debut3} - ${date_fin3}</p>
        <br>
        <h2>Domaine de competence</h2>
        <br>
        <p><strong></strong> ${d1}</p>
        <p><strong></strong> ${d2}</p>
        <p><strong></strong> ${d3}</p>
        <p><strong></strong> ${d4}</p>
        <br>
        <h2>Experience professionnelle</h2>
        <br>
        <p>${poste}</p>
        <p><strong></strong> ${entreprise}</p>
        <p><strong></strong> ${date_debut4} - ${date_fin4}</p>
        <p>${poste1}</p>
        <p><strong></strong> ${entreprise1}</p>
        <p><strong></strong> ${date_debut5} - ${date_fin5}</p>
        <br>
        <p>${poste2}</p>
        <p><strong></strong> ${entreprise2}</p>
        <p><strong></strong> ${date_debut6} - ${date_fin6}</p>
        <br>
        <h2>Certifications</h2>
        <br>
        <p><strong></strong> ${c1}</p>
        <p><strong></strong> ${c2}</p>
        <p><strong></strong> ${c3}</p>
        <p><strong></strong> ${c4}</p>
        <br>
        <h2>Langues</h2>
        <br>
        <p><strong></strong> ${l1}</p>
        <p><strong></strong> ${l2}</p>
        <p><strong></strong> ${l3}</p>
        <p><strong></strong> ${l4}</p>
    `;
});
