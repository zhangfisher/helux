import { limuUtils, produce } from 'limu';
import { EVENT_NAME, LIMU_VER, RECORD_LOADING, VER } from './consts/user';
import { getAtom, isAtom, isDerivedAtom } from './factory/common/atom';
import { addMiddleware } from './factory/common/middleware';
import { addPlugin } from './factory/common/plugin';
import { emit, on } from './factory/common/userBus';
import { action } from './factory/createAction';
import { derive, deriveDict } from './factory/createDerived';
import { mutate, mutateDict, runMutate, runMutateTask } from './factory/createMutate';
import { atom, atomx, share, sharex } from './factory/createShared';
import { sync, syncer } from './factory/createSync';
import { watch } from './factory/createWatch';
import { currentDraftRoot } from './factory/creator/current';
import { flush, reactiveDesc } from './factory/creator/reactive';
import { getDeriveLoading, runDerive, runDeriveTask } from './helpers/fnRunner';
import { getRawState, getSnap } from './helpers/state';
import {
  getActionLoading,
  getMutateLoading,
  storeSrv,
  useActionLoading,
  useAtom,
  useAtomForceUpdate,
  useDerived,
  useGlobalId,
  useLocalForceUpdate,
  useMutable,
  useMutateLoading,
  useOnEvent,
  useReactive,
  useService,
  useWatch,
} from './hooks';
import { block, dynamicBlock, signal } from './signal';

const { shallowCompare, isDiff } = limuUtils;
const createShared = share; // for compatible wit v2 helux
const $ = signal; // signal api alias

export {
  atom,
  atomx,
  share,
  sharex,
  createShared,
  // derive api
  derive,
  deriveDict,
  runDerive,
  runDeriveTask,
  // watch api
  watch,
  // hooks api
  useAtom,
  useAtomForceUpdate,
  useReactive,
  useDerived,
  useWatch,
  useGlobalId,
  useService,
  useOnEvent,
  useMutable,
  useMutateLoading,
  useActionLoading,
  useLocalForceUpdate,
  // action api
  action,
  // signal api
  $,
  signal,
  block,
  dynamicBlock,
  // mutate api
  mutate,
  mutateDict,
  runMutate,
  runMutateTask,
  // sync api
  sync,
  syncer,
  // emit api
  emit,
  on,
  // util api
  reactiveDesc,
  flush,
  currentDraftRoot,
  isAtom,
  isDerivedAtom,
  storeSrv,
  produce,
  shallowCompare,
  isDiff,
  getMutateLoading,
  getActionLoading,
  getDeriveLoading,
  getRawState,
  getSnap,
  getAtom,
  addMiddleware,
  addPlugin,
  EVENT_NAME,
  RECORD_LOADING,
  VER,
  LIMU_VER,
};
