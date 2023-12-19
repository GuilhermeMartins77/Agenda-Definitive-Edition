function adicionarNome() {
    var nome = prompt("Digite o nome a adicionar:");
    if (nome != null) {
      var table = document.getElementById("nameTable");
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = nome;
      cell2.innerHTML = '<input type="checkbox" class="nameCheckbox">';
      cell3.innerHTML = '<button onclick="removerNome(this)">Remover</button>';
    }
  }

  function removerNome(row) {
    var rowIndex = row.parentNode.parentNode.rowIndex;
    document.getElementById("nameTable").deleteRow(rowIndex);
  }

  function limparSelecionados() {
    const checkboxes = document.querySelectorAll('.nameCheckbox');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  }

  function realcarLinha(nome) {
    var table = document.getElementById("nameTable");
    for (var i = 1; i < table.rows.length; i++) {
      if (table.rows[i].cells[0].innerText === nome) {
        table.rows[i].style.backgroundColor = "#FFA07A";
      }
    }
  }

  function restaurarRealce() {
    var table = document.getElementById("nameTable");
    for (var i = 1; i < table.rows.length; i++) {
      table.rows[i].style.backgroundColor = "";
    }
  }

  function gerarImagem() {
    html2canvas(document.getElementById('nameTable')).then(function(canvas) {
      var img = canvas.toDataURL('image/png');
      var link = document.createElement('a');
      link.href = img;
      link.download = 'tabela_nomes.png';
      link.click();
    });
  }

  function adicionarTecnicoNdt() {
    var nomeTecnico = prompt("Digite o nome do técnico NDT:");
    var quantidadeNdt = prompt("Digite a quantidade de NDT:");
    var tipoNdt = prompt("Digite o tipo de NDT:");

  if (nomeTecnico != null && quantidadeNdt != null && tipoNdt != null) {
    var table = document.getElementById("ndtTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = nomeTecnico;
    cell2.innerHTML = quantidadeNdt;
    cell3.innerHTML = tipoNdt;
   }
  }

  function adicionarTecnico() {
    var nome = document.getElementById("nomeTecnico").value;
    var codigo = document.getElementById("codigoTecnico").value;
    if (nome && codigo) {
      var table = document.getElementById("tecnicoTable");
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = nome;
      cell2.innerHTML = codigo;
      document.getElementById("nomeTecnico").value = ""; // Limpa o campo do nome
      document.getElementById("codigoTecnico").value = ""; // Limpa o campo do código
      } 
      else {
      alert("Por favor, preencha o nome e o código do técnico.");
      }
    }
