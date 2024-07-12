Array.from(document.querySelectorAll('relative-time')).map((el,i,els) => {
  if (i === 0) {
    return ;
  }else{
    const thisDate = new Date(el.getAttribute('datetime'));
    const previousDate = new Date(els[i-1].getAttribute('datetime'));
    const seconds = (thisDate - previousDate) / 1000;
    if (seconds < 60) return el.shadowRoot.innerHTML = `${Math.round(seconds)} seconds later`;
    const minutes = seconds / 60;
    if (minutes < 60) return el.shadowRoot.innerHTML = `${Math.round(minutes)} minutes later`;
    const hours = minutes / 60;
    if (hours < 24) return el.shadowRoot.innerHTML = `${Math.round(hours)} hours later`;
    const days = hours / 24;
    return el.shadowRoot.innerHTML = `${Math.round(days)} days later`;
  }
});

