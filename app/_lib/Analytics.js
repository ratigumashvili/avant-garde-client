import Script from "next/script"

function Analytics() {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C0NWFC6CDZ"></Script>
            <Script id="google-analytics">
                {
                    `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C0NWFC6CDZ');
            `
                }
            </Script>
        </>
    )
}

export default Analytics