async function getcrypto() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const data = await response.json();
    // console.log(data);
    const coins = data.map(coin => {
        return `
        <div class="coin">
        <div class="rank">${coin.market_cap_rank}</div>
        <div><img src = "${coin.image}" alt="${coin.name}" class="img"/></div>
        <div class="symbol">${coin.symbol}</div>
        <div class="name">${coin.name}</div>
        <div class="price">₹${coin.current_price.toLocaleString()}</div>
        <div class="high24h">₹${coin.high_24h.toLocaleString()}</div>
        <div class="low24h">₹${coin.low_24h.toLocaleString()}</div>
        <div class="marketCap">₹${coin.market_cap.toLocaleString()}</div>
        <div class="volume">₹${coin.total_volume.toLocaleString()}</div>
        </div>
        `
    }).join('');
    document.querySelector('#app').innerHTML = coins
}
getcrypto();