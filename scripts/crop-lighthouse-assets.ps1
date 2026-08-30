param(
    [string]$ScoresInput = "E:\rymn.me\dev.rymn.me\public\lighthouse-scores-raw.png",
    [string]$ScoresOutput = "E:\rymn.me\dev.rymn.me\public\lighthouse-scores.png",
    [string]$LogoInput = "E:\rymn.me\dev.rymn.me\public\lighthouse-logo.png",
    [string]$LogoIconOutput = "E:\rymn.me\dev.rymn.me\public\lighthouse-icon.png"
)

Add-Type -AssemblyName System.Drawing

function Save-Crop($inputPath, $outputPath, $xRatio, $yRatio, $wRatio, $hRatio) {
    $original = [System.Drawing.Image]::FromFile($inputPath)
    $w = $original.Width
    $h = $original.Height

    $cropX = [int]($w * $xRatio)
    $cropY = [int]($h * $yRatio)
    $cropW = [int]($w * $wRatio)
    $cropH = [int]($h * $hRatio)

    $bitmap = New-Object System.Drawing.Bitmap($cropW, $cropH)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
    $graphics.DrawImage($original, 0, 0, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.Dispose()
    $bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bitmap.Dispose()
    $original.Dispose()

    Write-Output ("saved " + $outputPath + " (" + $cropW + "x" + $cropH + ")")
}

# Keep both score rows + short labels, cut long descriptions.
Save-Crop $ScoresInput $ScoresOutput 0.03 0.02 0.94 0.52

# Lighthouse illustration only (without wordmark text).
Save-Crop $LogoInput $LogoIconOutput 0.08 0.02 0.84 0.62
