const button = document.getElementById("run");
button.disabled = false;
button.onclick = async () => {
  const result = document.getElementById("result");
  try {
    const frame = document.getElementById("portfolio").contentWindow;
    const input = frame.document.querySelector('textarea[aria-label="Terminal command"]');
    if (!input || input.value) throw new Error("Open Terminal with an empty draft first");
    const section = input.closest('section[aria-label="Terminal"]');
    const transcript = () => section.querySelector("dialog pre").textContent;
    const before = transcript();
    const event = (type, init) =>
      input.dispatchEvent(new frame.CompositionEvent(type, { bubbles: true, ...init }));
    input.focus();
    event("compositionstart", { data: "" });
    input.dispatchEvent(
      new frame.KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        isComposing: true,
        bubbles: true,
        cancelable: true,
      }),
    );
    input.dispatchEvent(
      new frame.KeyboardEvent("keydown", {
        key: "a",
        code: "KeyA",
        keyCode: 229,
        bubbles: true,
        cancelable: true,
      }),
    );
    event("compositionupdate", { data: "日本語" });
    event("compositionend", { data: "日本語" });
    await new Promise((resolve) => frame.requestAnimationFrame(resolve));
    if (
      input.value !== "日本語" ||
      transcript() !== before ||
      section.getAttribute("aria-busy") !== "false"
    )
      throw new Error(
        "Composing keys submitted a command or composition did not commit exactly once",
      );
    event("compositionstart", { data: "" });
    event("compositionupdate", { data: "cancelled preedit" });
    event("compositionend", { data: "" });
    await new Promise((resolve) => frame.requestAnimationFrame(resolve));
    if (input.value !== "日本語" || transcript() !== before)
      throw new Error("Cancelled composition changed the draft");
    result.textContent = JSON.stringify(
      {
        passed: true,
        composingKeysIgnored: true,
        committedOnce: input.value,
        cancellationRetainsDraft: true,
        transcriptUnchanged: true,
        nativeIME: false,
        physicalMobile: false,
      },
      null,
      2,
    );
  } catch (error) {
    result.textContent = `FAIL: ${error.message}`;
  }
};
