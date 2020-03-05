var cvBuilder = new Vue({
    el: '#cvApp',
    data: {
        imeKorisnika: "",
        prezimeKorisnika: "",
        key: "",
        brojTelefona: "",
        trenutnaAdresa: "",
        skolovanje: "",
        valueMarketing: "",
        valueFinansije: "",
        oKorisniku: "",
        radnoIskustvo: "",
        drzavaBoravista:"",
        gradBoravista:"",
        datumRodjenja:"",
        slika:"",
        hideB: true,
        
    }
})






function izbrisi() {
    document.getElementById("imeKorisnika").value="";
    document.getElementById("prezimeKorisnika").value="";
    document.getElementById("telefonInput").value="";
    document.getElementById("drzavaInput").value="";
    document.getElementById("skolovanjeArea").value="";
    document.getElementById("okorisniku").value="";
    document.getElementById("iskustvo").value="";
    document.getElementById("option").value="";
    document.getElementById("gradInput").value="";
    document.getElementById("datumInput").value="";
    document.getElementById("marketingInput").value="";
    document.getElementById("finansijeInput").value="";
}

function popuni() {
    document.getElementById("imeKorisnika").value="Eldar";
    document.getElementById("prezimeKorisnika").value="Šeremet";
    document.getElementById("telefonInput").value="0038755147852";
    document.getElementById("drzavaInput").value="Bosna i Hercegovina";
    document.getElementById("skolovanjeArea").value="- BACHELOR DEGREE       International Business Oxford University 2008                 - CCE A and B LEVEL        Wimbeldon High School 2004";
    document.getElementById("okorisniku").value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    document.getElementById("iskustvo").value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    document.getElementById("option").value="Junior Developer";
    document.getElementById("gradInput").value="Sarajevo";
    document.getElementById("datumInput").value="06.05.1997";
    document.getElementById("marketingInput").value="35";
    document.getElementById("finansijeInput").value="87";
}


