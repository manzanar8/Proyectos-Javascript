window.addEventListener('load', function() {
    tableCard2();
    chartBar();

});

function chartBar() {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Fresa', 'Naranja', 'Sandía', 'Uva', 'Kiwi', 'Melón'],
            datasets: [{
                label: '# de Votos',
                data: [22, 3, 23, 19, 4, 9],
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

};

function tableCard2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            var headers = ["Nombre", "Usuario", "Email"];
            var table = document.createElement("table"); //makes a table element for the page

            for (var i = 0; i < data.length; i++) {
                var row = table.insertRow(i);
                row.insertCell(0).innerHTML = data[i].name;
                row.insertCell(1).innerHTML = data[i].username;
                row.insertCell(2).innerHTML = data[i].email;
            }

            var header = table.createTHead();
            var headerRow = header.insertRow(0);
            header.className = 'strong';
            for (var i = 0; i < headers.length; i++) {
                headerRow.insertCell(i).innerHTML = headers[i];
            }

            document.getElementById("table01").appendChild(table);

        })

}

function suma() {

    let x = document.getElementById("one").value;
    let y = document.getElementById("two").value;

    if (x !== '' && y !== '') {
        let res = parseInt(x) + parseInt(y);
        document.getElementById("result").innerHTML = 'Resultado: ' + res;
    } else {
        document.getElementById("result").innerHTML = 'Ingresa los números en los campos "Número 1" y "Número 2".';
    }

}

function searchId() {
    let elementTable = document.getElementById("table02");
    let tableData = document.getElementById("wow");

    if (tableData) {
        tableData.remove();
    }
    let id = document.getElementById("ids");
    let value = id.options[id.selectedIndex].value;
    let idFinal = parseInt(value);
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${idFinal}`)
        .then(response => response.json())
        .then(data => {
            var headers = ["Id", "Número", "Comentario"];
            var table = document.createElement("table"); //makes a table element for the page
            table.setAttribute("id", "wow");

            for (var i = 0; i < data.length; i++) {
                var row = table.insertRow(i);
                row.insertCell(0).innerHTML = data[i].postId;
                row.insertCell(1).innerHTML = data[i].id;
                row.insertCell(2).innerHTML = data[i].name;
            }

            var header = table.createTHead();
            var headerRow = header.insertRow(0);
            header.className = 'strong';
            for (var i = 0; i < headers.length; i++) {
                headerRow.insertCell(i).innerHTML = headers[i];
            }

            elementTable.append(table);


        })
};

function searchNumbers() {
    const str = document.getElementById('cadena1').value;
    const response = document.getElementById('result2');
    let indices = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "0") {
            indices.push(str[i]);
        } else if (str[i] == "1") {
            indices.push(str[i]);
        } else if (str[i] == "2") {
            indices.push(str[i]);
        } else if (str[i] == "3") {
            indices.push(str[i]);
        } else if (str[i] == "4") {
            indices.push(str[i]);
        } else if (str[i] == "5") {
            indices.push(str[i]);
        } else if (str[i] == "6") {
            indices.push(str[i]);
        } else if (str[i] == "7") {
            indices.push(str[i]);
        } else if (str[i] == "8") {
            indices.push(str[i]);
        } else if (str[i] == "9") {
            indices.push(str[i]);
        }
    }
    response.innerHTML = 'Números Ingresados:' + indices;
};