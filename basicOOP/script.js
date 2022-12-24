class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
          </tr>
        `;
    });

    return open + close;
  }
  z;
  render(element) {
    let table =
      "<table class='table table-dark table-striped'>" +
      this.createHeader(this.init.columns) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = table;
  }
}

const table = new Table({
  columns: ["Name", "Email", "Alamat"],
  data: [
    ["Zakariya Febriansah", "zakariyaindonesia@gmail.com", "Gebog"],
    ["Arbain Novianasari", "arbain@gmail.com", "Dawe"],
    ["Rika Fajriyatus Saidah", "rikafjrs@gmail.com", "Buloh"],
  ],
});
const app = document.getElementById("appS");
table.render(app);
