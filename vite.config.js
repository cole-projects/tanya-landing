import { defineConfig, loadEnv } from "vite";
import fs from "node:fs";
import path from "node:path";
import react from "@vitejs/plugin-react";

/** Serves /tanya.vcf with vCard MIME type + attachment so iOS opens “Add contact” instead of showing raw text. */
function vcfDownloadPlugin() {
  const sendVcf = (res, filePath) => {
    const body = fs.readFileSync(filePath);
    res.setHeader("Content-Type", "text/vcard; charset=utf-8");
    res.setHeader("Content-Disposition", 'attachment; filename="Tanya.vcf"');
    res.setHeader("Content-Length", String(body.length));
    res.end(body);
  };

  return {
    name: "vcf-download-headers",
    enforce: "pre",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url !== "/tanya.vcf") {
          next();
          return;
        }
        const filePath = path.join(server.config.root, "public", "tanya.vcf");
        if (!fs.existsSync(filePath)) {
          next();
          return;
        }
        sendVcf(res, filePath);
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url !== "/tanya.vcf") {
          next();
          return;
        }
        const filePath = path.join(
          server.config.root,
          server.config.build.outDir,
          "tanya.vcf"
        );
        if (!fs.existsSync(filePath)) {
          next();
          return;
        }
        sendVcf(res, filePath);
      });
    },
  };
}

/** Set VITE_SITE_URL (e.g. https://yourdomain.com) in CI/hosting for full Open Graph + Twitter cards + JSON-LD. */

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "").replace(/\/$/, "");

  return {
    server: {
      /** Lets you open the dev URL from your phone on the same Wi‑Fi (`http://<your-LAN-IP>:5173`). */
      host: true,
      port: 5173,
      /** Allow `.local` and other LAN hostnames (avoids Vite 403 “host not allowed” on some phones). */
      allowedHosts: true,
    },
    preview: {
      host: true,
      port: 4173,
    },
    plugins: [
      vcfDownloadPlugin(),
      react(),
      {
        name: "html-brand-meta",
        transformIndexHtml(html) {
          if (!siteUrl) {
            return html
              .replace(/\n\s*<meta property="og:url" content="__OG_URL__" \/>/g, "")
              .replace(
                /\n\s*<meta property="og:image" content="__OG_IMAGE__" \/>/g,
                ""
              )
              .replace(
                /\n\s*<meta\s+property="og:image:alt"[\s\S]*?\/>/g,
                ""
              )
              .replace(/\n\s*<meta name="twitter:image" content="__OG_IMAGE__" \/>/g, "")
              .replace(/\n\s*<meta\s+name="twitter:image:alt"[\s\S]*?\/>/g, "")
              .replace(/\n    __JSON_LD__\n/g, "\n")
              .replace(
                /<meta name="twitter:card" content="summary_large_image" \/>/,
                '<meta name="twitter:card" content="summary" />'
              );
          }

          const ogImage = `${siteUrl}/tanya-who.png`;
          const jsonLd = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "TanyaTalk",
            description:
              "A calm, practical way to think clearer, make progress, and feel better. One conversation at a time.",
            url: siteUrl,
            image: ogImage,
          });

          return html
            .replaceAll("__OG_URL__", siteUrl)
            .replaceAll("__OG_IMAGE__", ogImage)
            .replace(
              /\n    __JSON_LD__\n/g,
              `\n    <script type="application/ld+json">${jsonLd}</script>\n`
            );
        },
      },
    ],
  };
});
