import { detectSystemLocale } from "../cli/cmd/tui/util/system-locale"

const locale = detectSystemLocale()
export const isChinese = locale === "zh" || locale === "zht"