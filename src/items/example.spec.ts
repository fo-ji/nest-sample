describe('Jest practice', () => {
  // ネスト可能（テストケースのディレクトリ分けの感覚）
  // describe()
  it('test1', () => {
    const result = 1;
    const expected = 1;
    expect(result).toEqual(expected);
    // MEMO: itの中で複数のexpectは可能、ただ、結果は１つしか返ってこないので詳細が分かりずらい
    // expect(result).toEqual(expected);
  });
});
