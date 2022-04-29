const fs = require("fs");
const path = require("path");

//Criando pasta
// fs.mkdir(path.join(__dirname, "/pastname"), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }
//   console.log("Pasta criada");
// });

// Criar um arquivos
fs.writeFile(
  path.join(__dirname, "/pastname", "test.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");
    fs.appendFile(
      path.join(__dirname, "/pastname", "test.txt"),
      "Adicionando no arquivo",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Sucesso!");
      }
    );
    fs.readFile(
      path.join(__dirname, "/pastname", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);

// Adicionar conteudo no arquivo criado

// Ler arquivo
