class TableData {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = `<thead><tr>`;
    let close = `</tr></thead>`;

    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = `<tbody>`;
    let close = `</tbody>`;

    data.forEach((d) => {
      open += `<tr>
        <td>${d[0]}</td>
        <td>${d[1]}</td>
        <td>${d[2]}</td>
        <td>${d[3]}</td>
        </tr>
        `;
    });

    return open + close;
  }
  render(element) {
    let table = `<table class="table table-hover">` + this.createHeader(this.init.colums) + this.createBody(this.init.data) + `</table>`;
    element.innerHTML = table;
  }
}

const table = new TableData({
  colums: ["Name", "Alamat", "Email", "Hobi"],
  data: [
    ["Febri", "Kudus", "febri@gmail.com", "Mancing"],
    ["Riko", "Padang", "riko@gmail.com", "Makan"],
    ["Valdo", "Madiun", "valdo@yahoo.com", "Masak"],
  ],
});

const tampilData = document.getElementById("appS");
table.render(tampilData);

function cobaLagi(name) {
  console.log(`Halo nama saya ${name}`);
}

export { table, TableData, cobaLagi, tampilData };
