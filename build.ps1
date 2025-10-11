# Переводим консоль Windows в UTF-8
chcp 65001 > $null

# Говорим Turbo не использовать цветной fancy-вывод (чтобы не было багов с кодировкой)
$env:TURBO_NO_COLOR = "1"
$env:FORCE_COLOR = "0"

# Запускаем билд через pnpm
pnpm run build
