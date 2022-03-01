//const meuCsv = require("objects-to-csv");

class Aluno {
  [x: string]:any;
    constructor (nome:string, idade:number, nota:number){
      this._nome = nome;
      this._idade = idade;
      this._nota = nota;
    }
  }
  console.log('################## DESAFIO 05 - NODE JS ##################')
  let alunos:Array<Aluno> = [];
  let Alunos = new Aluno ('nome', 0, 0);
  
  var readlineSync = require('readline-sync');
  
  var cad = readlineSync.question('Quantos alunos deseja cadastrar?');
  let listAlunos = [];
  let somaNotas = 0;
  let somaIdades = 0;
  
    for (var i = 0; i < cad; i++)
      {
        
                  Alunos[i] = new Aluno('',0,0);
                  console.log("Escreva os nome do aluno: " +i);  
                  Alunos[i].nome = readlineSync.question();
          
                  console.log(Alunos[i].nome + " Foi cadastrado!");
                  console.log("\n"); 
  
                  console.log("Por favor, informe a idade deste aluno: " );
                  Alunos[i].idade = parseInt(readlineSync.question());
                  
                  console.log(" A idade " + Alunos[i].idade + " foi atribuida ao aluno " );
                  console.log("\n");
  
                  console.log("Por favor, informe a nota deste aluno: " );
                  Alunos[i].nota = parseInt(readlineSync.question());
              
                  console.log(" A nota " + Alunos[i].nota + " foi atribuida ao aluno " );
                  console.log("\n");
  
        listAlunos.push(Alunos[i].nome, Alunos[i].idade, Alunos[i].nota);
  
  
      somaNotas = somaNotas + Alunos[i].nota;
      somaIdades = somaIdades + Alunos[i].idade;
      }
  
  console.log('----------- Lista de Alunos ----------')
           console.log(listAlunos);
           console.log("\n");
          
           alunos.push(listAlunos);

    const somaAlunos = new Aluno("Somas", somaIdades, somaNotas)
    alunos.push(somaAlunos);
    console.log(somaAlunos);
    
  
    const ObjectToCsv = require('objects-to-csv');
 
    (async () => {
      const csv = new ObjectToCsv(alunos);
      await csv.toDisk('./arquivo.csv');
    })();
   
  