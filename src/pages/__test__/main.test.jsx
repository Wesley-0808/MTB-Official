import { describe, expect, it } from 'vitest';
import { getLastFilledIndex } from '../../components/numberInput';
// TODO：虚拟的单元测试，后续会替换成cypress测试页面功能

describe('Header Component', () => {
  it('should keep only the last filled code input item active, and first item when empty', () => {
    expect(getLastFilledIndex('AB')).toBe(1);
    expect(getLastFilledIndex('A')).toBe(0);
    expect(getLastFilledIndex('')).toBe(0);
  });
});
