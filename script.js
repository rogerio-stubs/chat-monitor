setInterval(() => { 
  if(document.querySelector('.ReactVirtualized__Grid')){
    let chats = document.querySelector('.ReactVirtualized__Grid');
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

 var mutationObserver = new MutationObserver(function(mutations) {
   mutations.forEach(function(mutation) {
    let arrCustomers = [];
    let customers = mutation.target;
    if ($(customers).hasClass('ReactVirtualized__Grid__innerScrollContainer')) {
      console.log('object', customers)
      let names = customers.querySelectorAll('.title___1ufWo');
      console.log('names', names)
      for(let index = 0; index < names.length; index++) {
        console.log('for', names[index])
        arrCustomers.push(names[index].querySelector('.rc-view-d7de1c43').innerText);
      }
      console.log('array customers', arrCustomers);
      arrCustomers = [];
    }
  });
});