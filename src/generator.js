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

function randomFromSet(set) {
  return set[Math.floor(Math.random() * set.length)];
}

export function generateGearSet() {
  const names = Object.keys(SLOTS).map(n => n.toLowerCase());
  const set = {};

  names.forEach((name) => {
    set[name] = generateGearSlot(name);
  });

  console.log(set);
  return set;
}

export function generateGearSlot(gearSlot) {
  const set = Object.keys(itemList[gearSlot.toLowerCase()]);
  return Number(randomFromSet(set));
}
