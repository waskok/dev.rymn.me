param(
    [string]$InputPath,
    [string]$OutputPath
)

Add-Type -AssemblyName System.Drawing

$original = [System.Drawing.Image]::FromFile($InputPath)
Write-Output ("size: " + $original.Width.ToString() + "x" + $original.Height.ToString())

$bitmap = New-Object System.Drawing.Bitmap($original)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

$w = $bitmap.Width
$h = $bitmap.Height

# Crop off the stray dark sliver on the right edge (screenshot artifact).
$cropWidth = [int]($w * 0.985)

# Redaction box over the name line — proportions measured against the 1024x683 reference image.
$boxX = [int]($w * 0.24)
$boxY = [int]($h * 0.335)
$boxW = [int]($w * 0.52)
$boxH = [int]($h * 0.115)

$fillBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 241, 242, 246))
$borderPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 214, 217, 224), 2)
$rect = New-Object System.Drawing.Rectangle($boxX, $boxY, $boxW, $boxH)
$graphics.FillRectangle($fillBrush, $rect)
$graphics.DrawRectangle($borderPen, $rect)

$font = New-Object System.Drawing.Font("Segoe UI", [int]($h * 0.028), [System.Drawing.FontStyle]::Regular)
$textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 150, 154, 166))
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center
$format.LineAlignment = [System.Drawing.StringAlignment]::Center
$graphics.DrawString("dane osobowe ukryte", $font, $textBrush, [System.Drawing.RectangleF]::new($boxX, $boxY, $boxW, $boxH), $format)

$graphics.Dispose()

$finalBitmap = New-Object System.Drawing.Bitmap($cropWidth, $h)
$finalGraphics = [System.Drawing.Graphics]::FromImage($finalBitmap)
$srcRect = New-Object System.Drawing.Rectangle(0, 0, $cropWidth, $h)
$finalGraphics.DrawImage($bitmap, $srcRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$finalGraphics.Dispose()

$finalBitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$bitmap.Dispose()
$finalBitmap.Dispose()
$original.Dispose()

Write-Output ("saved: " + $OutputPath)
