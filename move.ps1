$folders = @('about', 'blog', 'blog-single', 'cart', 'checkout', 'contact', 'course-2', 'course-3', 'course-sidebar', 'course-single', 'courses', 'event-single', 'events', 'faq', 'index-2', 'index-3', 'login', 'register', 'shop', 'shop-single', 'team', 'team-details', 'thank-you')

foreach ($folder in $folders) {
    $source = "src/app/$folder"
    $destination = "src/app/[locale]/$folder"
    if (Test-Path $source) {
        Move-Item -Path $source -Destination $destination -Force
        Write-Host "Moved $source to $destination"
    }
}
