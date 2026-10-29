import type { CanvasRenderer } from "ghostty-web";

/**
 * ghostty-web 0.4 compares fractional viewport positions but indexes with whole
 * rows. Normalize at its public renderer boundary so both paths see the same row.
 */
export function alignViewportRows(renderer: CanvasRenderer) {
  const render = renderer.render;
  renderer.render = function (buffer, forceAll, viewportY, scrollback, scrollbarOpacity) {
    return render.call(
      this,
      buffer,
      forceAll,
      Math.floor(viewportY ?? 0),
      scrollback,
      scrollbarOpacity,
    );
  };
}
