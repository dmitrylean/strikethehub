chcp 65001 > $null

$env:TURBO_NO_COLOR = "1"
$env:FORCE_COLOR = "0"

pnpm run build
