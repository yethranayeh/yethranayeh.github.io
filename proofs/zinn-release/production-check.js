// Test harness around the actual production portfolio, never a substitute terminal.
const result = document.getElementById("result");
document.getElementById("narrow").onclick = () => {
  document.getElementById("portfolio").style.width = "700px";
};
document.getElementById("wide").onclick = () => {
  document.getElementById("portfolio").style.width = "100%";
};
document.getElementById("storage").onclick = async () => {
  const databases = await indexedDB.databases();
  const snapshots = [];
  for (const { name } of databases) {
    if (!name.startsWith("portfolio-zinn-")) {
      continue;
    }
    const database = await new Promise((resolve, reject) => {
      const request = indexedDB.open(name);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    try {
      const saved = await new Promise((resolve, reject) => {
        const request = database
          .transaction("snapshots", "readonly")
          .objectStore("snapshots")
          .get("board");
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      const digest = saved && new Uint8Array(await crypto.subtle.digest("SHA-256", saved.bytes));
      snapshots.push({
        name,
        revision: saved?.revision,
        sha256: digest && [...digest].map((byte) => byte.toString(16).padStart(2, "0")).join(""),
      });
    } finally {
      database.close();
    }
  }
  result.textContent = JSON.stringify(
    { databases, snapshots, userAgent: navigator.userAgent },
    null,
    2,
  );
};
document.getElementById("input").onclick = async () => {
  try {
    const frame = document.getElementById("portfolio").contentWindow;
    const input = frame.document.querySelector('textarea[aria-label="Terminal command"]');
    if (!input || input.value) throw new Error("Open Terminal with an empty draft");
    const section = input.closest("section");
    const transcript = () => section.querySelector("dialog pre").textContent;
    const before = transcript();
    const key = (value, code, extra = {}) =>
      input.dispatchEvent(
        new frame.KeyboardEvent("keydown", {
          key: value,
          code,
          bubbles: true,
          cancelable: true,
          ...extra,
        }),
      );
    const text = (value) => {
      for (const char of value) key(char, char === " " ? "Space" : `Key${char.toUpperCase()}`);
    };
    const tick = () => new Promise((resolve) => frame.requestAnimationFrame(resolve));
    const assert = (condition, message) => {
      if (!condition) throw new Error(message);
    };
    input.focus();
    text("echo ac");
    key("ArrowLeft", "ArrowLeft");
    text("b");
    assert(input.value === "echo abc", "mid-line editing");
    key("c", "KeyC", { ctrlKey: true });
    assert(input.value === "", "Ctrl+C clears draft");
    text("draft");
    key("ArrowLeft", "ArrowLeft");
    key("ArrowUp", "ArrowUp");
    key("ArrowDown", "ArrowDown");
    assert(
      input.value === "draft" && input.selectionStart === 4,
      "history draft/caret restoration",
    );
    key("l", "KeyL", { ctrlKey: true });
    assert(input.value === "draft", "Ctrl+L retains draft");
    key("c", "KeyC", { ctrlKey: true });
    text("cat REA");
    key("Tab", "Tab");
    await tick();
    await tick();
    for (let i = 0; i < 120 && input.value === "cat REA"; i++) await tick();
    assert(
      input.value === "cat README.txt ",
      `path Tab completion: ${JSON.stringify(input.value)}`,
    );
    key("Tab", "Tab");
    await tick();
    await tick();
    assert(frame.document.activeElement === input, "repeated Tab retains focus");
    key("c", "KeyC", { ctrlKey: true });
    const composition = (type, data) =>
      input.dispatchEvent(new frame.CompositionEvent(type, { data, bubbles: true }));
    composition("compositionstart", "");
    key("Enter", "Enter", { isComposing: true });
    key("a", "KeyA", { keyCode: 229 });
    composition("compositionupdate", "日本語");
    composition("compositionend", "日本語");
    await tick();
    assert(
      input.value === "日本語" && section.getAttribute("aria-busy") === "false",
      "composition commits once without submission",
    );
    composition("compositionstart", "");
    composition("compositionupdate", "cancelled");
    composition("compositionend", "");
    await tick();
    assert(input.value === "日本語", "composition cancellation");
    key("c", "KeyC", { ctrlKey: true });
    const clipboardData = new frame.DataTransfer();
    clipboardData.setData("text/plain", "echo pasted\necho lines");
    input.dispatchEvent(
      new frame.ClipboardEvent("paste", { clipboardData, bubbles: true, cancelable: true }),
    );
    assert(
      input.value === "echo pasted\necho lines" && section.getAttribute("aria-busy") === "false",
      "multiline paste remains draft",
    );
    key("c", "KeyC", { ctrlKey: true });
    key("Escape", "Escape");
    assert(
      frame.document.activeElement.getAttribute("role") === "menuitem",
      "Escape leaves editing",
    );
    input.focus();
    key("Tab", "Tab", { shiftKey: true });
    assert(
      frame.document.activeElement.getAttribute("role") === "menuitem",
      "Shift+Tab leaves editing",
    );
    result.textContent = JSON.stringify(
      {
        passed: true,
        midLine: true,
        ctrlC: true,
        ctrlL: true,
        historyDraftCaret: true,
        repeatedTab: true,
        syntheticComposition: true,
        multilinePaste: true,
        focusExit: true,
        nativeIME: false,
        physicalMobile: false,
        beforeTranscriptCharacters: before.length,
      },
      null,
      2,
    );
  } catch (error) {
    result.textContent = `FAIL: ${error.message}`;
  }
};
