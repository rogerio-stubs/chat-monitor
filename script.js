let elemento = document.querySelector('.inserir')
let chats = document.querySelector('.elemento')


var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        let elemento = mutation.target.innerText;
        console.log(elemento)
    });
  });

mutationObserver.observe(chats, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
  });