let tarefas = []

function adicionarTarefa() {
  
   // Recebe o valor do input do usuario
    const inputtarefa = document.getElementById('inputtarefa')
    let tarefa = inputtarefa.value.trim()

    const mensagem = document.getElementById('mensagem')

    // AULA 03 -----------------------------------
    if (tarefa == ""){
      let mensagemerro = "Digite uma tarefa para adiciona-la a sua lista"
      mensagem.textContent = mensagemerro
      
    } else{
      let mensagemsucesso = "Tarefa adicionada com sucesso!"
      mensagem.textContent = mensagemsucesso

      tarefas.push(tarefa)
      renderizartarefas()
      
      // Cria um novo item (li) e insere na (lista ul)
     
    }
    
    

    
    // Limpa o input do usuario
    inputtarefa.value = ""

    
}

function renderizartarefas(){
  const listatarefas = document.getElementById('listatarefas')
  listatarefas.innerHTML = ""

  //  for itens na lista
  // 1. item inicial (iterador)
  // 2. item final (condição)
  // 3. se vai de um e um elemento ou se pula

  // for(iterador; condição; frequencia)

  let i = 0
  for(i; i < tarefas.length; i++){
    let novatarefa = document.createElement('li')
    novatarefa.textContent = tarefas[i]
    listatarefas.appendChild(novatarefa)
  }
}


  