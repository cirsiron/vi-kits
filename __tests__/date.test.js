import { msToDate, msToDateSimple, formatDate } from '../common/date';

describe('msToDate()', () => {
  test('参数为空 应为 -', () => {
    expect(msToDate()).toBe('-')
    expect(msToDate(undefined)).toBe('-')
    expect(msToDate(null)).toBe('-')
    expect(msToDate('')).toBe('-')
  })
  test('参数为1596697666460 应为 2020-08-06 15:07:46', () => {
    expect(msToDate(1596697666460)).toBe('2020-08-06 15:07:46')
  })
  test('参数为1596697666460 应为 2020-08-06 15:07:46', () => {
    expect(msToDate('2020-08-06 15:07:46')).toBe('2020-08-06 15:07:46')
  })
})

describe('msToDateSimple()', () => {
  test('参数为空 应为 -', () => {
    expect(msToDateSimple()).toBe('-')
    expect(msToDateSimple(undefined)).toBe('-')
    expect(msToDateSimple(null)).toBe('-')
    expect(msToDateSimple('')).toBe('-')
  })
  test('参数为1596697666460 应为 2020-08-06', () => {
    expect(msToDateSimple(1596697666460)).toBe('2020-08-06')
  })
  test('参数为1596697666460 应为 2020-08-06', () => {
    expect(msToDateSimple({})).toEqual({})
  })
})

describe('formatDate()', () => {
  test('参数为空 应为 -', () => {
    expect(formatDate()).toBe('-')
  })
  test('参数为1596697666460 应为 2020-08-06 15:07:46', () => {
    expect(formatDate(1596697666460, 'yyyy-MM-dd hh:mm:ss')).toBe('2020-08-06 15:07:46')
    expect(formatDate(1596697666460, 'yyyy')).toBe('2020')
  })
  test('参数为2020-08-06 15:07:46 应为 2020-08-06 15:07:46', () => {
    expect(formatDate('2020-08-06 15:07:46', 'yyyy-MM-dd hh:mm:ss')).toBe('2020-08-06 15:07:46')
  })
  test('参数为2020-08-06 15:07:46 应为 2020-08-06 15:07:46', () => {
    expect(formatDate('2020-08-06 15:07:46')).toBe('2020-08-06 15:07:46')
  })
  test('参数为2020-08-06 15:07:46,yyyy/MM/dd hh:mm 应为 2020/08/06 15:07', () => {
    expect(formatDate('2020-08-06 15:07:46', 'yyyy/MM/dd hh:mm')).toBe('2020/08/06 15:07')
  })
  test('参数为2020-08-06 15:07:46,yyyy/MM/dd hh:mm 应为 2020/08/06 15:07', () => {
    expect(formatDate('2020-08-06 15:07:46', 'yyyy/M/d h:m')).toBe('2020/8/6 15:7')
  })
  test('参数为2020-08-06 15:07:46,yyyy/MM/dd hh:mm 应为 2020/08/06 15:07', () => {
    expect(formatDate('2020-08-06 15:07:46', 'yy/MM/dd hh:mm')).toBe('20/08/06 15:07')
  })
  test('参数为2020-08-06 15:07:46,yyyy/MM/dd hh:mm 应为 2020/08/06 15:07', () => {
    expect(formatDate(1596697666460, 'yyyy/MM/dd hh:mm')).toBe('2020/08/06 15:07')
  })
  test('参数为2020-08-06 15:07:46,yyyy/MM/dd hh 应为 2020/08/06 15', () => {
    expect(formatDate('2020-08-06 15:07:46', 'yyyy/MM/dd hh')).toBe('2020/08/06 15')
  })
  test('参数为(2020-08-06 15:07:46,yyyy/MM/dd) 应为 2020/08/06', () => {
    expect(formatDate('2020-08-06 15:07:46', 'yyyy/MM/dd')).toBe('2020/08/06')
  })
  test('参数为(1596697666460,yyyy/MM/dd) 应为 2020/08/06', () => {
    expect(formatDate(1596697666460, 'yyyy/MM/dd')).toBe('2020/08/06')
  })
  test('参数为(sd) 应为 -', () => {
    expect(formatDate('sd')).toBe('-')
  })
  test('参数为(0) 应为 -', () => {
    expect(formatDate(0)).toBe('-')
  })
})
