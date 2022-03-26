function cargarTabla() {
    let tbody = document.querySelector("#bodyData");
    let name = "?name=" + document.getElementById("nombre").value;
    let status = "&status=" + document.getElementById("status").value;

    fetch("https://rickandmortyapi.com/api/character"+ name + status)
        .then((res) => res.json())
        .then((data) => {
        let rowData = data.results
            .map((item) => {
            return `<tr>
                <td>${item.name}</td>
                <td>${item.status}</td>
                <td>${item.species}</td>
                <td>${item.gender}</td>
                <td>${item.location.name}</td>
                <td><img src="${item.image}" class="imgapi"></td>
            </tr>`;
        })
        .join("");
        tbody.innerHTML = rowData;
    });
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
        if(e.keyCode == 13) {
            e.preventDefault();
        }
    }))
});