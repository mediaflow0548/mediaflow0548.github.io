$ErrorActionPreference = 'Stop'
$siteUrl = 'https://mediaflow.spakman.nl'
$languages = @(
    @{ code = 'nl'; folder = '';  locale = 'nl_NL'; hreflang = 'nl' },
    @{ code = 'en'; folder = 'en'; locale = 'en_GB'; hreflang = 'en-GB' },
    @{ code = 'de'; folder = 'de'; locale = 'de_DE'; hreflang = 'de-DE' },
    @{ code = 'fr'; folder = 'fr'; locale = 'fr_FR'; hreflang = 'fr-FR' }
)

# Loop door alle bestaande pagina's en voeg alleen ontbrekende SEO/social-tags toe.
Get-ChildItem -Recurse -Filter *.html | Where-Object { $_.Name -ne '404.html' } | ForEach-Object {
    $file = $_
    $html = [IO.File]::ReadAllText($file.FullName)

    # Pagina's die al canonical/OG-tags hebben overslaan, zodat het script veilig opnieuw kan draaien.
    if ($html -match 'rel="canonical"|property="og:title"') {
        Write-Host "Overslaan (tags bestaan al): $($file.FullName)"
        return
    }

    # Taal, titel en omschrijving uitlezen voor de social-preview.
    $lang = if ($html -match '<html lang="([a-z-]+)"') { $Matches[1] } else { 'nl' }
    $title = if ($html -match '<title>(.*?)</title>') { $Matches[1] } else { 'Mediaflow' }
    $description = if ($html -match '<meta name="description" content="([^"]*)"') { $Matches[1] } else { '' }

    # Canonical-URL opbouwen op basis van de werkelijke locatie in de repository.
    $relativePath = $file.FullName.Substring($PWD.Path.Length + 1).Replace('\', '/')
    $canonical = "$siteUrl/$relativePath"

    # Per taal een alternate-link genereren, inclusief x-default voor zoekmachines.
    $alternateLinks = $languages | ForEach-Object {
        $target = if ($_.folder) { "$siteUrl/$($_.folder)/$($file.Name)" } else { "$siteUrl/$($file.Name)" }
        '<link rel="alternate" hreflang="{0}" href="{1}">' -f $_.hreflang, $target
    }
    $alternateLinks += '<link rel="alternate" hreflang="x-default" href="' + $siteUrl + '/' + $file.Name + '">'

    $currentLocale = ($languages | Where-Object { $_.code -eq $lang }).locale

    # Volledige set aan canonical-, hreflang-, Open Graph- en Twitter-tags.
    $metaTags = @(
        '<link rel="canonical" href="' + $canonical + '">'
        $alternateLinks
        '<meta property="og:title" content="' + $title + '">'
        '<meta property="og:description" content="' + $description + '">'
        '<meta property="og:type" content="website">'
        '<meta property="og:url" content="' + $canonical + '">'
        '<meta property="og:site_name" content="Mediaflow">'
        '<meta property="og:image" content="' + $siteUrl + '/assets/logo.png">'
        '<meta property="og:locale" content="' + $currentLocale + '">'
        '<meta name="twitter:card" content="summary_large_image">'
        '<meta name="twitter:title" content="' + $title + '">'
        '<meta name="twitter:description" content="' + $description + '">'
        '<meta name="twitter:image" content="' + $siteUrl + '/assets/logo.png">'
    ) | Where-Object { $_ }

    $metaHtml = ($metaTags -join "`n    ")
    $html = $html -replace '</head>', "    $metaHtml`n</head>"

    # UTF-8 zonder BOM schrijven, zodat de bestaande encoding behouden blijft.
    [IO.File]::WriteAllText($file.FullName, $html, [Text.UTF8Encoding]::new($false))
    Write-Host "Tags toegevoegd: $($file.FullName)"
}
