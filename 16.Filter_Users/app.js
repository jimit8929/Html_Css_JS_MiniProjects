const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];
const toggler = document.getElementById("switch");


getData();


filter.addEventListener("input", (e) => filterData(e.target.value));  //dar input par (button press) par filterdata function run thase 
toggler.addEventListener("change", handleThemeToggle);   // dark mode white mode toggle karva mate 


const savedTheme = localStorage.getItem('theme') || 'light';   // optional che , j theme current hase eej refresh kariya pachi pan rese 
document.body.classList.toggle('dark-mode', savedTheme === 'dark');
toggler.checked = savedTheme === 'dark';

async function getData() {
    try {
        const res = await fetch("https://randomuser.me/api?results=50");
        if (!res.ok) throw new Error('Failed to fetch data');
        const { results } = await res.json();

        result.innerHTML = '';   // juno data rmove kari do
        listItems.length = 0; // array empty kari do

        results.forEach(user => {
            const li = document.createElement("li");   // jatlo data aayo che fetch thaine aani mate image , firstname , lastname , city , country banao ane array ma push kari do
            li.innerHTML = `                            
                <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
            `;
            listItems.push(li);
            result.appendChild(li); // ane pachi array ma thi result ma append kari do
        });  
    } catch (err) {
        result.innerHTML = `<li class="error">Error loading data: ${err.message}</li>`;  // agar fetch karva ma kai error aayo toh 
    }
}

function filterData(searchTerm) {
    const term = searchTerm.toLowerCase();   // badhu lowercase ma kari do taki case-insensitive bani jai
    listItems.forEach(item => {
        const name = item.querySelector('h4').textContent.toLowerCase();    // name , city , country variables ma store karo ane check karo 
        const location = item.querySelector('p').textContent.toLowerCase(); 
        item.classList.toggle('hide', !(name.includes(term) || location.includes(term)));    //if neither name nor location includes the search term, we add .hide else remove .hide
    });
}

function handleThemeToggle() {
    document.body.classList.toggle('dark-mode', toggler.checked);  // Add/remove dark-mode class based on checkbox state
    localStorage.setItem('theme', toggler.checked ? 'dark' : 'light'); // refresh karva pan same j reh ee , not necessary 
}