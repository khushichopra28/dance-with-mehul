function Get-Atoms($path) {
  $bytes = [System.IO.File]::ReadAllBytes($path)
  $pos = 0
  $len = $bytes.Length
  $atoms = @()
  while ($pos + 8 -le $len) {
    $size = ($bytes[$pos] -shl 24) -bor ($bytes[$pos+1] -shl 16) -bor ($bytes[$pos+2] -shl 8) -bor $bytes[$pos+3]
    $type = [System.Text.Encoding]::ASCII.GetString($bytes, $pos+4, 4)
    if ($size -eq 0) { $atoms += "$type (size=0, extends to EOF)"; break }
    if ($size -eq 1) { $atoms += "$type (64-bit size header)"; break }
    $atoms += "$type size=$size offset=$pos"
    if ($size -lt 8) { break }
    $pos += $size
  }
  $atoms
}

$path = 'c:\Users\mano\Desktop\mehuk\reels\IMG_7634.mp4'
$fi = Get-Item $path
Write-Host "File: $($fi.Name)"
Write-Host "Size: $($fi.Length) bytes"
Write-Host "Modified: $($fi.LastWriteTime)"
Write-Host '--- Top-level atoms ---'
Get-Atoms $path

$bytes = [System.IO.File]::ReadAllBytes($path)
$len = $bytes.Length
$found = $false
for ($i = 0; $i + 8 -le $len; $i++) {
  if ($bytes[$i+4] -eq 0x6D -and $bytes[$i+5] -eq 0x6F -and $bytes[$i+6] -eq 0x6F -and $bytes[$i+7] -eq 0x76) {
    Write-Host "moov box found at offset $i"
    $found = $true
  }
}
if (-not $found) { Write-Host 'NO moov box found anywhere in file' }

