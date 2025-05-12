const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const noTasksMessage = document.getElementById('noTasks');
const tabAll = document.getElementById('tabAll');
const tabPending = document.getElementById('tabPending');
const tabCompleted = document.getElementById('tabCompleted');

let currentFilter = 'all';

    function setActiveTab(tab) {
      [tabAll, tabPending, tabCompleted].forEach(t => {  // teeno tab check karo aur jo active hai usko highlight karo baki sab ko white default banado
        if (t === tab) {
          t.classList.add('bg-blue-500', 'text-white');
        } else {
          t.classList.remove('bg-blue-500', 'text-white');
        }
      });
    }

    function filterTasks() {
      const tasks = taskList.querySelectorAll('li');    // saari list ko check karo aur jiska checkbox state all pe hai toh sab kuch show karo
      tasks.forEach(task => {
        const checkbox = task.querySelector('input[type="checkbox"]');
        if (currentFilter === 'all') {
          task.classList.remove('hidden');          // jiska checkbox checked nai huwa hai usko pending meh rakho
        } else if (currentFilter === 'pending') {
          checkbox.checked ? task.classList.add('hidden') : task.classList.remove('hidden');
        } else if (currentFilter === 'completed') {
          checkbox.checked ? task.classList.remove('hidden') : task.classList.add('hidden'); // jiska checkbox checked hai usko completed meh rakho
        }
      });
      updateNoTasksMessage();
    }

    function updateNoTasksMessage() {
      const visibleTasks = taskList.querySelectorAll('li:not(.hidden)');   // kitni list hidden hai vo find karo aur agar length 0 hai toh 
      if (visibleTasks.length === 0) {                                     // check karo ki currentfilter all pe hai pending pe hai ya completed hai us hisab se message display kardo
        noTasksMessage.classList.remove('hidden');
        noTasksMessage.textContent = currentFilter === 'all' ? 'No tasks yet. Add one above.' :
                                     currentFilter === 'pending' ? 'No pending tasks.' :
                                     'No completed tasks.';
      } else {
        noTasksMessage.classList.add('hidden');  // baki agar koi task hai toh no task ma message hide kardo aur task dikhao
      }
    }

    function addTask() {        // input ko tasttext meh add karo agar blank hai skip kardo direct  trim se spaces remove hojayenge
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');        // ek list banao 
        li.className = 'flex items-center p-2 bg-white rounded shadow';

        const checkbox = document.createElement('input'); // sathme ek input checkbox banao
        checkbox.type = 'checkbox';
        checkbox.className = 'mr-4 h-6 w-6';

        
        checkbox.addEventListener('change', function() {
          const span = li.querySelector('span');   // checkbox pe click karne se uske sath wala jo text hai uspe line-through add kardo , wapis click kiya toh remove kardena 
          if (this.checked) {                       // uske baad filtertask() ko call kardo taki agar pending hai toh us hisab se display ho completed hai toh us hisab se display ho
            span.classList.add('line-through');
          } else {
            span.classList.remove('line-through');
          }
          filterTasks();
        });

        const span = document.createElement('span');
        span.className = 'flex-grow';
        span.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.className = 'text-blue-500 mr-4';        // adding edit button
        editButton.textContent = 'Edit';

        editButton.addEventListener('click', function() {

          if (editButton.textContent === 'Edit') {          // edit button pe click karte hi jo span tha vo ek input field ban jayegi aur jo edit button tha vo save button ban jayega
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            input.className = 'flex-grow p-4 border';
            li.replaceChild(input, span);
            editButton.textContent = 'Save';
          } 
          else {
            const input = li.querySelector('input[type="text"]'); // save pe click karne k baad check karega agar checkbox clicked that toh line through rahegi varna hatt jayegi
            const newSpan = document.createElement('span');     // sathi jo input field bani thi vo wapis span ban jayegi aur save button phirse edit button ban jayega
            newSpan.textContent = input.value;
            newSpan.className = 'flex-grow';
            if (checkbox.checked) {
              newSpan.classList.add('line-through');
            }
            li.replaceChild(newSpan, input);
            editButton.textContent = 'Edit';
          }
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'text-red-500';
        deleteButton.textContent = 'Delete';            // puri list ko hi delete kardega aur filtertask ko call kardega if no lists then us accordinly no tasks meh jo message hoga vo display hojayega
        deleteButton.setAttribute('aria-label', 'Delete task');
        deleteButton.addEventListener('click', function() {
          taskList.removeChild(li);
          filterTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editButton);     // saari list items ko li meh apped karo aur uske baad puri ek list ko tasklist meh append kardo as a child taki ek k baad ek niche aaye 
        li.appendChild(deleteButton);   // parent dalte toh newly created top pe aati 
        taskList.appendChild(li);

        taskInput.value = '';  // new task type karne keliye taskinput ko clear kardega , phir focus bhi waha pe le lega aur filtertask call kardega taki jo tab active hai uska hi message display ho
        taskInput.focus();
        filterTasks();
      }
    }

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTask();
      }
    });

    tabAll.addEventListener('click', function() {
      currentFilter = 'all';
      setActiveTab(tabAll);
      filterTasks();
    });

    tabPending.addEventListener('click', function() {
      currentFilter = 'pending';
      setActiveTab(tabPending);
      filterTasks();
    });

    tabCompleted.addEventListener('click', function() {
      currentFilter = 'completed';
      setActiveTab(tabCompleted);
      filterTasks();
    });

  
    setActiveTab(tabAll);
    filterTasks();
    taskInput.focus();