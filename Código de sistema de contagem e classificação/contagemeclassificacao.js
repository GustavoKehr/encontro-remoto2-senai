let listaAlunos = ["Gustavo", "Adriano", "Carlos", "Cintia", "Gabriela"];

console.log("----------------------------------------------------------------------------------")

for (let index = 0; index < listaAlunos.length; index++) {
    console.log(index);
    if (index  == 0 ) {console.log(listaAlunos[index] + " Número zero");
        
    } else if (index % 2 == 0)
     {console.log(listaAlunos[index] + " Número par");
        
        } else {console.log(listaAlunos[index] + " Número impar");

        } 
}

console.log("----------------------------------------------------------------------------------")