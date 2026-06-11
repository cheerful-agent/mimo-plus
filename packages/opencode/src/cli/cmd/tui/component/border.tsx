export const EmptyBorder = {
  topLeft: "",
  bottomLeft: "",
  vertical: "",
  topRight: "",
  bottomRight: "",
  horizontal: " ",
  bottomT: "",
  topT: "",
  cross: "",
  leftT: "",
  rightT: "",
}

export const RoundedBorder = {
  border: ["left" as const, "right" as const, "top" as const, "bottom" as const],
  customBorderChars: {
    topLeft: "╭",
    bottomLeft: "╰",
    vertical: "│",
    topRight: "╮",
    bottomRight: "╯",
    horizontal: "─",
    bottomT: "┴",
    topT: "┬",
    cross: "┼",
    leftT: "├",
    rightT: "┤",
  },
}

export const RoundedLeftBorder = {
  border: ["left" as const],
  customBorderChars: {
    ...EmptyBorder,
    vertical: "│",
  },
}

export const SplitBorder = {
  border: ["left" as const, "right" as const],
  customBorderChars: {
    ...EmptyBorder,
    vertical: "│",
  },
}

export const MinimalBorder = {
  border: ["left" as const, "right" as const],
  customBorderChars: {
    ...EmptyBorder,
    vertical: " ",
  },
}
