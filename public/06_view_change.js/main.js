window.onload = () => {
    const main_div = document.getElementById("main_screen");
    const change_button = document.getElementById("change_button");

    main_div.innerText = "This is first page.";

    change_button.onclick = change_screen;
}

function change_screen() {
    console.log("change screen");
    const main_div = document.getElementById("main_screen");

    while (main_div.firstChild) {
        main_div.removeChild(main_div.firstChild);
    }

    main_div.innerText = "This is 2nd page.";

}