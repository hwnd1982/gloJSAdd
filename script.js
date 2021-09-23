{
  const Race = function(count) {
    this.count = count;
    this.racer = [];
  };

  Race.prototype.addRacer = function(name) {
    if (this.count <= 0) {
      console.log(`${name} не можем быть принят, команда сформирована.`);
      return this;
    }
    this.racer.push(name);
    this.count--;
    console.log(this.racer);
    return this;
  };

  // const maximum = new Race(2);
  // maximum.addRacer('Вася').addRacer('Петя').addRacer('Коля');
}
{
  class Race {
    constructor(count) {
      this.count = count;
      this.racer = [];
    }
    addRacer(name) {
      if (this.count <= 0) {
        console.log(`${name} не можем быть принят, команда сформирована.`);
        return this;
      }
      this.racer.push(name);
      this.count--;
      console.log(this.racer);
      return this;
    }
  }

  const maximum = new Race(2);
  maximum.addRacer('Вася').addRacer('Петя').addRacer('Коля');
}
{
  // функциональный объект
  const Foo = function(x) {
    this.x = x;
  };

  Foo.prototype.map = function(fn) {
    return new Foo(fn(this.x));
  };

  new Foo(5).map(a => console.log(a + a));
  new Foo('Привет!').map(console.log);
  // функтор
  const foo = function(x) {
    return function(fn) {
      return foo(fn(x));
    };
  };

  foo(5)(a => console.log(a + a));
  foo('Привет!')(console.log);
}

{
  const race = (count = 0, racer = []) => ({
    addRacer: name => {
      if (count <= 0) {
        console.log(`${name} не можем быть принят, команда сформирована.`);
        return race(count, racer);
      }
      racer.push(name);
      count--;
      console.log(racer);
      return race(count, racer);
    }
  });

  const maximum = race(3);
  maximum.addRacer('Вася').addRacer('Петя').addRacer('Коля');
}

{
  const race = (count = 0, racer = [], obj = {
    addRacer: name => {
      if (count <= 0) {
        console.log(`${name} не можем быть принят, команда сформирована.`);
        return race(count, racer, obj);
      }
      racer.push(name);
      count--;
      console.log(racer);
      return race(count, racer, obj);
    },
    removeRacer: name => {
      const exist = racer.indexOf(name);

      if (exist === -1) {
        console.log(`${name} - нет в списке.`);
        return race(count, racer, obj);
      }
      racer.splice(exist, 1);
      count++;
      console.log(racer);
      return race(count, racer, obj);
    }
  }) => obj;

  const maximum = race(4);
  maximum.addRacer('Вася').addRacer('Петя').addRacer('Коля').addRacer('Катя').removeRacer('Петя').addRacer('Андрей');
}
