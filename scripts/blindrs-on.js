function badWords() {
  const content = document.body.innerText;
  if (content.toLowerCase.includes('climate change')) {
    return true;
  }
  return false;
}

if (!document.getElementById('blindr') && badWords()) {
  const blindr = document.createElement('div');
  blindr.id = 'blindr';
  document.body.replaceChildren(blindr);
}