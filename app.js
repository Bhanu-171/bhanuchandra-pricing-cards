const monthlyButton = document.getElementById('monthly');
const yearlyButton = document.getElementById('yearly');
const prices = document.querySelectorAll('.price');
const units = document.querySelectorAll('.unit');
const billingWords = document.querySelectorAll('.billing-word');

function setPeriod(period) {
  prices.forEach((price) => {
    price.textContent = price.dataset[period];
  });

  units.forEach((unit) => {
    unit.textContent = period === 'monthly' ? 'per month' : 'per year';
  });

  billingWords.forEach((word) => {
    word.textContent = period;
  });

  monthlyButton.setAttribute('aria-pressed', String(period === 'monthly'));
  yearlyButton.setAttribute('aria-pressed', String(period === 'yearly'));
  monthlyButton.classList.toggle('active', period === 'monthly');
  yearlyButton.classList.toggle('active', period === 'yearly');
}

monthlyButton.addEventListener('click', () => setPeriod('monthly'));
yearlyButton.addEventListener('click', () => setPeriod('yearly'));
setPeriod('monthly');
