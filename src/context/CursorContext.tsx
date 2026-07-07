"use client";

import { createContext, useContext, useState, useCallback, useMemo, ReactNode } from "react";

type CursorMode = "default" | "label";

interface CursorState {
  mode: CursorMode;
  label: string;
}

interface CursorContextValue {
  cursorState: CursorState;
  setCursorLabel: (label: string) => void;
  resetCursor: () => void;
}

const DEFAULT_STATE: CursorState = { mode: "default", label: "" };

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorState, setCursorState] = useState<CursorState>(DEFAULT_STATE);

  // useCallback so consumers (e.g. Magnetic, TiltCard) don't re-subscribe
  // on every parent re-render — these get passed into onMouseEnter handlers.
  const setCursorLabel = useCallback((label: string) => {
    setCursorState({ mode: "label", label });
  }, []);

  const resetCursor = useCallback(() => {
    setCursorState(DEFAULT_STATE);
  }, []);

  const value = useMemo(
    () => ({ cursorState, setCursorLabel, resetCursor }),
    [cursorState, setCursorLabel, resetCursor]
  );

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return ctx;
}