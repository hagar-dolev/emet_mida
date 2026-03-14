# Images folder

Place image files here (e.g. `.jpg`, `.png`, `.webp`).

- **diffusion_visualization.png** — Used on the Tech page for the Diffusion section. You can use a screenshot from the [NVIDIA blog](https://developer.nvidia.com/blog/generative-ai-research-spotlight-demystifying-diffusion-based-models/) (e.g. “Figure 1. Denoising diffusion reveals novel images from pure noise”).

Reference them in your content using the base URL so deployment (e.g. GitHub Pages) works:

- **From JSX:** `src={\`${import.meta.env.BASE_URL}images/your-file.jpg\`}`
- Or use the `<Figure>` component and pass the path: `src={\`${import.meta.env.BASE_URL}images/your-file.jpg\`}` and optional `caption="…"`.
