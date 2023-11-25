import * as React from 'react'
import { describe, test, expect, afterEach } from 'vitest';
import { render, renderHook, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { atom, useWatch } from '../helux';

describe('useWatch', () => {

  test('watch atom, set same value', async () => {
    const [numAtom, setAtom] = atom(1);

    let runCount = 0;
    renderHook(() => {
      useWatch(() => {
        runCount += 1;
      }, () => [numAtom]);
    });

    expect(runCount).toBe(0);
    act(() => { setAtom(1) });
    expect(runCount).toBe(0);
  });

  test('watch atom, set new value', async () => {
    const [numAtom, setAtom] = atom(1);

    let runCount = 0;
    renderHook(() => {
      useWatch(() => {
        runCount += 1;
      }, () => [numAtom]);
    });

    expect(runCount).toBe(0);
    act(() => { setAtom(2) });
    expect(runCount).toBe(1);
  });

  test('watch atom, set immediate = true', async () => {
    const [numAtom, setAtom] = atom(1);

    let runCount = 0;
    renderHook(() => {
      useWatch(() => {
        runCount += 1;
      }, { deps: () => [numAtom], immediate: true });
    });

    expect(runCount).toBe(1); // trigger by immediate=true
    act(() => { setAtom(1) });
    expect(runCount).toBe(1);
  });


});
