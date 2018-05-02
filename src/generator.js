import itemList from './itemList';

const SLOTS = Object.freeze({
  'AMMO': 'AMMO',
  'BODY': 'BODY',
  'BOOTS': 'BOOTS',
  'CAPE': 'CAPE',
  'GLOVES': 'GLOVES',
  'HEAD': 'HEAD',
  'LEGS': 'LEGS',
  'NECK': 'NECK',
  'RING': 'RING',
  'SHIELD': 'SHIELD',
  'WEAPON': 'WEAPON',
});

function randomFromSetNum(set, n) {
  let len = set.length;
  const result = new Array(n), taken = new Array(len);
  while (n--) {
    const i = Math.floor(Math.random() * len);
    result[n] = set[i in taken ? taken[i] : i];
    taken[i] = --len in taken ? taken[len] : len;
  }
  return result;
}

export function generateGearSet(NUM = 6) {
  const names = Object.keys(SLOTS).map(n => n.toLowerCase());
  const set = {};

  names.forEach((name) => {
    set[name] = generateGearSlot(name, NUM);
  });

  return set;
}

export function generateGearSlot(gearSlot, NUM) {
  const set = Object.keys(itemList[gearSlot.toLowerCase()]);
  return randomFromSetNum(set, NUM);
}
