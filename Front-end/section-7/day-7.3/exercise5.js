const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My different Title',
  description: 'My Description',
};

// implemente seus testes aqui
assert.deepStrictEqual(obj1, obj2, 'obj1 e ob2 tem valores diferentes');
assert.notDeepEqual(obj2, obj3, 'obj2 e obj3 tem o mesmo valor');