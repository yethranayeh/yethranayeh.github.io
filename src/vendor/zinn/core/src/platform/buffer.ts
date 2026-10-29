export const Buffer = {
  byteLength(value: string, encoding = "utf8") {
    if (encoding !== "utf8" && encoding !== "utf-8") {
      throw new TypeError(`Unsupported encoding: ${encoding}`);
    }

    return new TextEncoder().encode(value).byteLength;
  },
};
