// const w = +prompt("Matrix width");
// const h = +prompt("Matrix height");

function matrix(w, h) {
  let result = new Array(h).fill().map(() => new Array(w).fill(""));
  let counter = 1;
  let startCol = 0;
  let endCol = w - 1;
  let startRow = 0;
  let endRow = h - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let j = startRow; j <= endRow; j++) {
      result[j][endCol] = counter;
      counter++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return result;
}

function renderMatrix(matrix) {
  const container = document.getElementById("matrixContainer");
  container.innerHTML = ""; // Empty container before adding new matrix
  const table = document.createElement("table");

  matrix.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  container.appendChild(table);
}

document.getElementById("generateButton").addEventListener("click", () => {
  const w = parseInt(document.getElementById("width").value);
  const h = parseInt(document.getElementById("height").value);

  if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
    alert("Please enter correct values ​​for width and height.");
    return;
  }

  const resultMatrix = matrix(w, h);
  renderMatrix(resultMatrix);
});
