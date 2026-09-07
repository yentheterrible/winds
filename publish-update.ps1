[CmdletBinding()]
param(
    [string]$Message
)

$ErrorActionPreference = 'Stop'

$repositoryRoot = git rev-parse --show-toplevel
if ($LASTEXITCODE -ne 0) {
    throw 'This script must be run inside the Winds Git repository.'
}

Set-Location $repositoryRoot
$branch = git branch --show-current
if ($branch -ne 'main') {
    throw "Refusing to publish from '$branch'. Switch to main first."
}

$changes = git status --porcelain
if (-not $changes) {
    Write-Host 'No changes to publish.' -ForegroundColor Yellow
    exit 0
}

if ([string]::IsNullOrWhiteSpace($Message)) {
    $Message = Read-Host 'Commit message'
}

if ([string]::IsNullOrWhiteSpace($Message)) {
    throw 'A commit message is required.'
}

Write-Host 'Changes to publish:' -ForegroundColor Cyan
$changes | Write-Host
$confirmation = Read-Host 'Stage all changes, commit, and push to origin/main? (y/N)'
if ($confirmation -notmatch '^(y|yes)$') {
    Write-Host 'Publish cancelled.' -ForegroundColor Yellow
    exit 0
}

git add --all
if ($LASTEXITCODE -ne 0) { throw 'git add failed.' }

git commit -m $Message
if ($LASTEXITCODE -ne 0) { throw 'git commit failed.' }

git push origin main
if ($LASTEXITCODE -ne 0) { throw 'git push failed.' }

Write-Host 'Published successfully. Vercel should now deploy the new main commit.' -ForegroundColor Green
