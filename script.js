const fileInput = document.getElementById('file-input');
const graphDiv = document.getElementById('graph-div');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
        const data = reader.result;

        // Parsez les données du fichier et affichez-les dans un graphique Plotly
        const plotData = ...; // Remplacez ceci par votre code de traitement de données

        Plotly.newPlot(graphDiv, plotData);
    };

    reader.readAsText(file);
});