$content = Get-Content -Path 'src\pages\BlogDetail\index.jsx' -Raw
$content = $content -replace '<p>(.*?)</p><div style=\{\{ marginTop: "1\.5rem" \}\}><a href="https://www\.skillgenc\.com/book-trial" className=\{styles\.ctaButton\}>(.*?)</a></div>', '<p>$1</p><div style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}><a href="https://www.skillgenc.com/book-trial" className={styles.ctaButton}>$2</a></div>'
Set-Content -Path 'src\pages\BlogDetail\index.jsx' -Value $content
