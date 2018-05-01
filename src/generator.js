const SLOTS = Object.freeze({
  'AMMO': 2,
  'BODY': 3,
  'BOOTS': 4,
  'CAPE': 5,
  'GLOVES': 6,
  'HEAD': 7,
  'LEGS': 8,
  'NECK': 9,
  'RING': 10,
  'SHIELD': 11,
  'WEAPON': 12,
});

const ITEM_IDS = [596, 626, 628, 630, 632, 634, 636, 638, 640, 642, 644]; // temporary generator

export function generateAny() {
  return ITEM_IDS[Math.floor(Math.random() * ITEM_IDS.length)];
}

export function generateGearSet() {
  return {
    ammo: generateAny(),
    body: generateAny(),
    boots: generateAny(),
    cape: generateAny(),
    gloves: generateAny(),
    head: generateAny(),
    legs: generateAny(),
    neck: generateAny(),
    ring: generateAny(),
    shield: generateAny(),
    weapon: generateAny(),
  };
}

export function generateGearSlot(gearSlot) {
  switch (gearSlot.toUpperCase()) {
    case SLOTS.AMMO:
      break;
    case SLOTS.BODY:
      break;
    case SLOTS.BOOTS:
      break;
    case SLOTS.CAPE:
      break;
    case SLOTS.GLOVES:
      break;
    case SLOTS.HEAD:
      break;
    case SLOTS.LEGS:
      break;
    case SLOTS.NECK:
      break;
    case SLOTS.RING:
      break;
    case SLOTS.SHIELD:
      break;
    case SLOTS.WEAPON:
      break;
    default:
      break;
  }
  return generateAny();
}
