const countEl = document.getElementById('count-el');
const logsEl = document.getElementById('logs-el');

const decrementBtn = document.getElementById('decrement-btn');
const incrementBtn = document.getElementById('increment-btn');
const refreshBtn = document.getElementById('refresh-btn');
const saveBtn = document.getElementById('save-btn');

let count = 0;

function renderCount() {
  countEl.textContent = count;
}

function increment() {
  count += 1;
  renderCount();
}

function decrement() {
  count -= 1;
  renderCount();
}

function save() {
  logsEl.textContent += count + ' - ';

  count = 0;
  renderCount();
}

function refresh() {
  logsEl.innerText = 'Logs: ';

  count = 0;
  renderCount();
}

/**/

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
refreshBtn.addEventListener('click', refresh);
saveBtn.addEventListener('click', save);
