async function getcrypto() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const data = await response.json();
    // console.log(data);
    const coins = data.map(coin => {
        return `
        
<div class="columns">
    <div class="column">
        <strong>${coin.market_cap_rank}</strong>
    </div>
    <div class="column has-text-left">
    <figure class="image is-32x32">
        <img class="is-rounded" src = "${coin.image}" alt="${coin.name}" />
    </figure>
    </div>
    <div class="column">
        <strong>${coin.symbol.toUpperCase()}</strong>    
    </div>
    <div class="column ">
        <div>${coin.name.toUpperCase()}</div>
    </div>
    <div class="column">
        <div>₹${coin.current_price.toLocaleString()}</div>            
    </div>
    <div class="column">
        <div>₹${coin.high_24h.toLocaleString()}</div>            
    </div>
    <div class="column">
        <div>₹${coin.low_24h.toLocaleString()}</div>
    </div>
    <div class="column">
        <div>₹${coin.market_cap.toLocaleString()}</div>
    </div>
    <div class="column">
        <div>₹${coin.total_volume.toLocaleString()}</div>
    </div>
  </div>
    `
    }).join('');
    document.querySelector('#app').innerHTML = coins
}
getcrypto();