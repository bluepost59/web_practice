
window.onload = () => {
    const button = document.getElementById("mybutton");
    const output_area = document.getElementById("output_area");


    console.log(button);

    button.onclick = () => {
        console.log("clicked");

        const new_text_box = document.createElement("div");
        new_text_box.innerText = "clicked";
        output_area.appendChild(new_text_box);
    };
}
