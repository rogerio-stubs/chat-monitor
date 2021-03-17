setInterval(() => { 
  if(document.querySelector('.ReactVirtualized__Grid__innerScrollContainer')){
    let chats = document.querySelector('.ReactVirtualized__Grid__innerScrollContainer');
    mutationObserver.observe(chats, {
      // attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      // attributeOldValue: true,
      // characterDataOldValue: true
    });
  }
  else {
    console.log("Elemento não encontrado");
  }
 }, 1000)

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    let elemento = mutation.target;
    // do jeito que está pode ser uma boa maneira de pegar as tags.
    console.log('elemento', elemento);
    
  });
});