const populaListas = () => {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(xhttp.responseText));
            }
        };
        xhttp.open("GET", "/listOptions", true);
        xhttp.send();
    })
}

populaListas()
    .then((res) => {
        const selectGen = document.querySelector("#generation");
        const generations = res.generation;
        const selectType1 = document.querySelector("#type1");
        const selectType2 = document.querySelector("#type2");
        const type = res.type;
        const selectAbilities = document.querySelector("#abilities");
        const abilities = res.abilities;
        for (item of generations) {
            selectGen.innerHTML += `<option value=${item}>${item}</option>`;
        }
        for (item of type) {
            selectType1.innerHTML += `<option value=${item.toLowerCase()}>${item}</option>`;
            selectType2.innerHTML += `<option value=${item.toLowerCase()}>${item}</option>`;
        }
        for (item of abilities) {
            selectAbilities.innerHTML += `<option value=${item}>${item}</option>`;
        }
    });

const realizaFiltro = () => {
        var xhttp = new XMLHttpRequest();
        listagem = document.querySelector(".listagem");
        listagem.removeChild(listagem.childNodes[0]);
        searching = document.createTextNode("Searching...");
        listagem.appendChild(searching);
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                results = JSON.parse(this.responseText)
                console.log(results)
                listagem = document.querySelector(".listagem")
                listagem.removeChild(listagem.childNodes[0]);
                listElement = document.createElement("ul")
                for (item of results) {
                    listElement.innerHTML += `<li>${item.name}<ul><li>${item.classfication}</li></ul></li>`
                }
                listagem.appendChild(listElement);
            }
        };

        genElement = document.querySelector("#generation")
        generation = genElement.options[genElement.selectedIndex].value
        abilityElement = document.querySelector("#abilities")
        ability = abilityElement.options[abilityElement.selectedIndex].value
        type1Element = document.querySelector("#type1")
        type1 = type1Element.options[type1Element.selectedIndex].value
        type2Element = document.querySelector("#type2")
        type2 = type2Element.options[type2Element.selectedIndex].value
        legRadioOpt = document.querySelectorAll("[name=legendary]")
        if (legRadioOpt[0].checked) {
            isLeg = 'true';
        } else if(legRadioOpt[1].checked){
            isLeg = 'false';
        } else {
            isLeg = "";
        }
        xhttp.open("GET", `/filter?generation=${generation}&type1=${type1}&type2=${type2}&ability=${ability}&is_leg=${isLeg}`, true);
        xhttp.send();
    }

buttonElement = document.querySelector("#search")
buttonElement.onclick = realizaFiltro




