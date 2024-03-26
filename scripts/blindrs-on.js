function badWords() {
  const toIgnore = [
    'global warming',
    'greenhouse gas emissions',
    'carbon footprint',
    'renewable energy',
    'fossil fuels',
    'sea level rise',
    'extreme weather events',
    'deforestation',
    'sustainable development',
    'climate action',
    'environmental protection',
    'carbon neutral',
    'climate resilience',
    'ecological footprint',
    'climate adaptation'
  ]
  const content = document.body.innerText.toLowerCase();
  if (toIgnore.some(el => content.includes(el))) {
    return true;
  }
  return false;
}

if (!document.getElementById('blindr') && badWords()) {
  const blindr = document.createElement('div');
  blindr.id = 'blindr';
  document.body.replaceChildren(blindr);
}