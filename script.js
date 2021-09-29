document.addEventListener('DOMContentLoaded', () => {
  const
    select = document.getElementById('cars'),
    output = document.getElementById('output');

  select.addEventListener('change', () => {
    const
      getData = () => new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
          if (request.readyState !== 4) {
            return;
          }
          request.status === 200 ?
            resolve(JSON.parse(request.responseText)) :
            reject('Произошла ошибка!');
        });
        request.open('GET', './cars.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
      }),
      showData = data => data.cars.forEach(({ brand, model, price }) => (brand === select.value ?
        output.innerHTML = `Тачка ${brand} ${model} <br> Цена: ${price}$` : null)),
      showError = error => output.innerHTML = error;

    getData().then(showData).catch(showError);
  });
});
