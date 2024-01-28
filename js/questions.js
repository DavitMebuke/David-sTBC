document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll(".questionsContainer > div");
    const hiddenParagraphs = document.querySelectorAll(".questionsContainer > p");

    divs.forEach((div, index) => {
        let isExpanded = false;

        div.addEventListener("click", function () {
            hiddenParagraphs[index].classList.toggle("show");

            const img = div.querySelector("img");
            img.src = isExpanded ? "https://icons.veryicon.com/png/o/miscellaneous/simple-and-round-line-mark/down-arrow-56.png" : "https://icons.veryicon.com/png/o/miscellaneous/line-icon/up-arrow-10.png";

            isExpanded = !isExpanded;
        });
    });
});