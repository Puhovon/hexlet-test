import _ from 'lodash';

const contentToObject = (content) => {
  const current = content.split('\r\n').filter((el) => el !== '');
  const rep = / /gi;
  const array = [100, 'huy']
  const keys = current[0].replace(rep, '_').split(',');
  const object = current.slice(1).map((el) => {
    const values = el.split(',');
    const obj = keys.reduce((acc, value, index) => {
      acc[value] = values[index];
      return acc;
    }, {});
    return obj;
  });
  return object;
};

function countOfCities(obj) {
  return `Count: ${obj.length}`;
}

function namesOfCities(obj) {
  const cities = _.uniq(obj.map(({City}) => City)).sort();

  return `Cities: ${cities.join(', ')}`;
}

function humidityMinMax(obj) {
  const minHum = obj.sort((a, b) => a.Humidity - b.Humidity)[0].Humidity;
  const maxHum = obj.sort((a, b) => b.Humidity - a.Humidity)[0].Humidity;
  return `Humidity: Min: ${minHum}, Max: ${maxHum}`;
}

function hottestDay(obj) {
  const hottest = obj.sort((a, b) => b.Max_Temperature - a.Max_Temperature)[0];
  return `HottestDay: ${hottest.Date} ${hottest.City}`;
}

export default function solution(content) {
  // BEGIN
  const object = contentToObject(content);
  console.log(countOfCities(object));
  console.log(namesOfCities(object));
  console.log(humidityMinMax(object));
  console.log(hottestDay(object));
  // END
}
