document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.getElementById("toggler");
    const pdf = document.getElementById("pdf");
    let isSwedishPdf = true;
    
    toggler.addEventListener("click", () => {
        if (isSwedishPdf){
            pdf.src = "Media/Images/CVEN.pdf";
            isSwedishPdf = !isSwedishPdf;
        }
        else {
            pdf.src = "Media/Images/CVSE.pdf";
            isSwedishPdf = !isSwedishPdf;
        }
    })
});