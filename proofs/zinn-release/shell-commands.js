const button = document.getElementById("run");
button.disabled = false;
button.onclick = () => {
  button.disabled = true;
  document.getElementById("status").textContent =
    "Running real BashKit and SQLite WASM in a module worker…";
  const worker = new Worker(new URL("./shell-commands.worker.js", import.meta.url), {
    type: "module",
  });
  const finish = (result) => {
    document.getElementById("status").textContent = result.error
      ? `FAIL: ${result.error}`
      : `PASS: ${result.passed} commands checks`;
    document.getElementById("results").textContent = JSON.stringify(result, null, 2);
    button.disabled = false;
    worker.terminate();
  };
  worker.onmessage = ({ data }) => finish(data);
  worker.onerror = (event) => finish({ error: event.message || "Worker failed to load" });
  worker.postMessage("run");
};
