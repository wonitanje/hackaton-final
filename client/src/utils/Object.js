Object.prototype.map = (instance, func) => {
  if (!instance instanceof Object)
    throw new Error('Instance is not an Object')
  if (!func instanceof Function)
    throw new Error('Func is not a Function')

  const entries = Object.entries(instance)
  try {
    return Object.fromEntries(entries.map(func))
  } catch {
    return undefined
  }
}

Object.prototype.mapToEntries = (instance, func) => {
  if (!instance instanceof Object)
    throw new Error('Instance is not an Object')
  if (!func instanceof Function)
    throw new Error('Func is not a Function')

  const entries = Object.entries(instance)
  return entries.map(func)
}

Object.prototype.filterToEntries = (instance, func) => {
  if (!instance instanceof Object)
    throw new Error('Instance is not an Object')
  if (!func instanceof Function)
    throw new Error('Func is not a Function')

  const entries = Object.entries(instance)
  return entries.filter(func)
}