const input = document.getElementById('search');


const filterNames = () => {
  const inputValue = input.value.toUpperCase();
  const ul = document.querySelector('.names');
  const li = ul.querySelectorAll('.list');
  
  li.forEach(list => {
    const a = list.getElementsByTagName('a')[0];
    
    if (a.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
      list.style.display = '';
    } else {
      list.style.display = 'none';
    }
  })
}

input.addEventListener('keyup', filterNames);
