setInterval(() => { 
  if(document.querySelector('.elemento')){
    let chats = document.querySelector('.elemento');
    mutationObserver.observe(chats, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true
    });
  }
  else {
    console.log("Elemento não encontrado");
  }
 }, 1000)

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    let elemento = mutation.target.innerText;
    console.log('elemento', elemento);
  });
});