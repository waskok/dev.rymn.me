param(
    [string]$RootPath
)

$files = Get-ChildItem -Path $RootPath -Recurse -Include *.ts, *.tsx -File
$emDash = [char]0x2014

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    if ($content.Contains($emDash)) {
        $updated = $content.Replace($emDash, '-')
        [System.IO.File]::WriteAllText($file.FullName, $updated, [System.Text.UTF8Encoding]::new($false))
        Write-Output ("updated: " + $file.FullName)
    }
}
