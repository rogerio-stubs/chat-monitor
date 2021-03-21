setInterval(() => { 
  if(document.querySelector('.ReactVirtualized__Grid__innerScrollContainer')){
    let chats = document.querySelector('.ReactVirtualized__Grid__innerScrollContainer');
    mutationObserver.observe(chats, {
      characterData: true,
      childList: true,
      subtree: true,
    });
  }
  else {
    console.log("Elemento não encontrado");
  }
 }, 1000)

let arrCustomers = [];
var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    let customers = mutation.target;
    names = customers.querySelectorAll('.title___1ufWo');
    for(let index = 0; index < names.length; index++) {
      arrCustomers = null;
      arrCustomers.push(names[index].querySelector('.rc-view-d7de1c43').innerText);
      console.log(arrCustomers);
  }
  });
});