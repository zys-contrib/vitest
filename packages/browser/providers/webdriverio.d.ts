import type { remote, ClickOptions, DragAndDropOptions } from 'webdriverio'
import '../matchers.js'
import type {} from "vitest/node"
import type {
  ScreenshotComparatorRegistry,
  ScreenshotMatcherOptions,
} from "@vitest/browser/context";

declare module 'vitest/node' {
  export interface BrowserProviderOptions extends Partial<
    Parameters<typeof remote>[0]
  > {}

  export interface UserEventClickOptions extends ClickOptions {}

  export interface UserEventDragOptions extends DragAndDropOptions {
    sourceX?: number
    sourceY?: number
    targetX?: number
    targetY?: number
  }

  export interface BrowserCommandContext {
    browser: WebdriverIO.Browser
  }

  export interface ToMatchScreenshotOptions
    extends Omit<
      ScreenshotMatcherOptions,
      "comparatorName" | "comparatorOptions"
    > {}

  export interface ToMatchScreenshotComparators
    extends ScreenshotComparatorRegistry {}
}
