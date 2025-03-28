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

  
  for(let i = 0; i < tarefas.length; i++){
    let novatarefa = document.createElement('li')
    novatarefa.textContent = tarefas[i]
    
      
    
    let botaoremover = document.createElement("button")
    botaoremover.className = "remover"
    botaoremover.textContent = "Remover"
    botaoremover.onclick = () => removertarefa(i)
    
    

    let botaoeditar = document.createElement("button")
    botaoeditar.className = "editar"
    botaoeditar.textContent = "Editar"
    botaoeditar.onclick = () => editartarefa(i)

    novatarefa.appendChild(botaoremover)
    novatarefa.appendChild(botaoeditar)
    listatarefas.appendChild(novatarefa)
  }
}

function removertarefa(i){
  tarefas.splice(i, 1)
  renderizartarefas()
}

function editartarefa(i){
  let tarefaeditada = prompt("Edite a tarefa:")
  if(tarefaeditada.trim() !== ""){
    tarefas[i] = tarefaeditada
    renderizartarefas()
  }
}


function limparlista(){
  tarefas.length = 0
  renderizartarefas()
  const mensagem = document.getElementById('mensagem')
  mensagem.textContent = "Lista excluída"
}



  