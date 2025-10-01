const size = 10
const table = document.createElement('table');
table.border = 1;
table.style.width = '80%'
table.style.margin = '0 auto'

for (let i = 1; i <= size; i++) {
    const tr = document.createElement('tr');

    for (let j = 1; j <= size; j++) {
        const td = document.createElement('td');
        td.textContent = i * j;
        tr.appendChild(td);
    }

    table.appendChild(tr);
}

document.getElementById('container').appendChild(table);
