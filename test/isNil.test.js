import { isNil, isEmptyObject, isEmptyStr, isNull, isUndef } from '../common/isNil';

describe('isNil()', () => {
  test('参数为空', () => {
    expect(isNil()).toBe(true)
    expect(isNil(undefined)).toBe(true)
    expect(isNil(null)).toBe(true)
    expect(isNil('')).toBe(true)
    expect(isNil(0)).toBe(false)
    expect(isNil(false)).toBe(false)
  })
})

describe('isEmptyObject()', () => {
  test('参数', () => {
    expect(isEmptyObject({})).toBe(true)
    expect(isEmptyObject(()=>{})).toBe(false)
    expect(isEmptyObject()).toBe(false)
    expect(isEmptyObject(123)).toBe(false)
    expect(isEmptyObject('asdf')).toBe(false)
    expect(isEmptyObject(null)).toBe(false)
    expect(isEmptyObject('')).toBe(false)
    expect(isEmptyObject(0)).toBe(false)
    expect(isEmptyObject(false)).toBe(false)
  })
})

describe('isEmptyStr()', () => {
  test('参数', () => {
    expect(isEmptyStr({})).toBe(false)
    expect(isEmptyStr('asdf')).toBe(false)
    expect(isEmptyStr(()=>{})).toBe(false)
    expect(isEmptyStr()).toBe(false)
    expect(isEmptyStr(null)).toBe(false)
    expect(isEmptyStr('')).toBe(true)
    expect(isEmptyStr(0)).toBe(false)
    expect(isEmptyStr(false)).toBe(false)
  })
})

describe('isNull()', () => {
  test('参数', () => {
    expect(isNull({})).toBe(false)
    expect(isNull('asdf')).toBe(false)
    expect(isNull(()=>{})).toBe(false)
    expect(isNull()).toBe(false)
    expect(isNull(null)).toBe(true)
    expect(isNull('')).toBe(false)
    expect(isNull(0)).toBe(false)
    expect(isNull(false)).toBe(false)
  })
})

describe('isUndef()', () => {
  test('参数', () => {
    expect(isUndef({})).toBe(false)
    expect(isUndef('asdf')).toBe(false)
    expect(isUndef(()=>{})).toBe(false)
    expect(isUndef()).toBe(true)
    expect(isUndef(undefined)).toBe(true)
    expect(isUndef(null)).toBe(false)
    expect(isUndef('')).toBe(false)
    expect(isUndef(0)).toBe(false)
    expect(isUndef(false)).toBe(false)
  })
})
