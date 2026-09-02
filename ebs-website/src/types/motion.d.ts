/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType, ReactNode } from "react";

declare module "framer-motion" {
  export const motion: { [key: string]: ComponentType<any> };
  export const AnimatePresence: ComponentType<{ children?: ReactNode; mode?: "sync" | "wait" | "popLayout"; initial?: boolean }>;
  export const useInView: (ref: unknown, options?: unknown) => boolean;
  export const useReducedMotion: () => boolean | null;
  export const useMotionTemplate: (strings: TemplateStringsArray, ...values: unknown[]) => unknown;
  export const useMotionValue: <T>(initial: T) => { get: () => T; set: (v: T) => void };
  export const m: { [key: string]: ComponentType<any> };
  export const LazyMotion: ComponentType<{ children?: ReactNode; features: unknown }>;
  export const domAnimation: unknown;
  export type Variants = Record<string, unknown>;
  export type Transition = Record<string, unknown>;
}

declare module "motion/react" {
  export const motion: { [key: string]: ComponentType<any> };
  export const AnimatePresence: ComponentType<{ children?: ReactNode; mode?: "sync" | "wait" | "popLayout"; initial?: boolean }>;
  export const useInView: (ref: unknown, options?: unknown) => boolean;
  export const useReducedMotion: () => boolean | null;
  export const useMotionTemplate: (strings: TemplateStringsArray, ...values: unknown[]) => unknown;
  export const useMotionValue: <T>(initial: T) => { get: () => T; set: (v: T) => void };
  export const m: { [key: string]: ComponentType<any> };
  export const LazyMotion: ComponentType<{ children?: ReactNode; features: unknown }>;
  export const domAnimation: unknown;
  export type Variants = Record<string, unknown>;
  export type Transition = Record<string, unknown>;
}
