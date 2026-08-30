param(
    [string]$InputPath = "E:\rymn.me\dev.rymn.me\public\lighthouse-raw.png",
    [string]$OutputPath = "E:\rymn.me\dev.rymn.me\public\lighthouse-hero.png"
)

Add-Type -AssemblyName System.Drawing

$original = [System.Drawing.Image]::FromFile($InputPath)
$w = $original.Width
$h = $original.Height

Write-Output ("original: " + $w + "x" + $h)

# Crop to the top score row + main performance panel (left ~62%, top ~72%).
$cropX = [int]($w * 0.02)
$cropY = [int]($h * 0.02)
$cropW = [int]($w * 0.62)
$cropH = [int]($h * 0.72)

$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$bitmap = New-Object System.Drawing.Bitmap($cropW, $cropH)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.DrawImage($original, 0, 0, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$graphics.Dispose()

$bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Dispose()
$original.Dispose()

Write-Output ("saved: " + $OutputPath)
