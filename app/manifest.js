export default function manifest() {
    return {
        "name": "Movies",
        "short_name": "Movies",
        "theme_color": "#21daa2",
        "background_color": "#1c1c1c",
        "display": "standalone",
        "orientation": "portrait",
        "scope": "/",
        "start_url": "/",
        "icons": [
            {
                "src": "/android-chrome-192x192.png",
                "sizes": "144x144",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "any maskable"
            }
        ]
    }
}