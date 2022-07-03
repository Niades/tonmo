import { nanoid } from "nanoid";

function range(start, end) {
  var foo = [];
  for (var i = start; i <= end; i++) {
    foo.push(i);
  }
  return foo;
};

function random(to, from=1) {
  Math.floor(Math.random() * to) + from
};

const { localStorage } = global;
const KEY_MAP_LS_KEY = "V1StGXR8_Z5jdHi6B-myT";
function _persistKeyMap(keyMap) {
  localStorage.setItem(KEY_MAP_LS_KEY, JSON.stringify(keyMap));
}

function _getKeyMap() {
  const lsKeyMap = JSON.parse(localStorage.getItem(KEY_MAP_LS_KEY));
  if(lsKeyMap === null) {
    return {};
  } else {
    return lsKeyMap;
  }
}

function LocalStorage() {
  if(localStorage === undefined) {
    return {
      setItem() {},
      getItem() {}
    };
  };
  let keyMap = {};
  try {
    keyMap = _getKeyMap()
  } catch(e) {
    keyMap = {};
  }
  return {
    setItem(key, value) {
      const newKey = `${key}-${nanoid}`;
      keyMap[key] = newKey;
      _persistKeyMap(keyMap);
      localStorage.setItem(newKey, JSON.stringify(value));
    },
    getItem(key) {
      return JSON.parse(localStorage.getItem(keyMap[key]));
    },
  }
};
const ls = LocalStorage();

export { range, random, ls as LocalStorage };
