document.querySelector('#t1').textContent = 'Caso deseje, mude a cor da pagina para sua navegação';
//document.querySelector('#t2').textContent = '';
//

  function mudaCorFundo(){
    const menu = document.querySelector('#coresFundo');
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;

  }      
    
