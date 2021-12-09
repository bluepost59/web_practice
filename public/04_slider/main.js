console.log("slider sample");

window.onload = () => {
    const slider_input = document.getElementById("myslider");
    const res_area = document.getElementById("res_area");

    res_area.innerText = slider_input.value;

    slider_input.oninput = () => {
        res_area.innerText = slider_input.value;
    }

}