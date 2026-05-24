---
name: Maritime Heritage Reimagined
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#41474e'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#72787f'
  outline-variant: '#c1c7cf'
  surface-tint: '#2f6388'
  primary: '#003b5a'
  on-primary: '#ffffff'
  primary-container: '#1a5276'
  on-primary-container: '#94c5ee'
  inverse-primary: '#9bccf6'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#592a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#7b3d00'
  on-tertiary-container: '#ffad70'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbe6ff'
  primary-fixed-dim: '#9bccf6'
  on-primary-fixed: '#001e30'
  on-primary-fixed-variant: '#0e4b6e'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 120px
---

## Brand & Style
The design system for this public portal centers on the "Maritime Heritage Reimagined" narrative. It balances the profound historical weight of the Buton Sultanate with the fluid, expansive nature of the surrounding seas. The brand personality is **Immersive, Welcoming, and Culturally Rich**, aiming to evoke a sense of prestigious discovery.

The visual style is a sophisticated blend of **Modern Minimalism** and **Tactile Heritage**. It utilizes generous whitespace (Pasir Putih) to allow cultural motifs and high-quality photography to breathe. Subtle influences of **Glassmorphism** are applied to navigation and overlay elements to simulate the clarity of coastal waters, while sharp typographic hierarchies maintain the portal's authoritative role as a public gateway.

## Colors
The palette is rooted in the geographical and cultural landscape of Baubau.

- **Biru Laut (#1A5276):** The primary anchor. Used for headers, primary buttons, and structural elements to signify trust, depth, and the maritime horizon.
- **Emas Tenun (#D4AF37):** The cultural accent. Inspired by traditional Butonese weaving, this color is reserved for interactive highlights, premium borders, and iconography to denote value and heritage.
- **Pasir Putih (#F9F7F2):** The canvas. This off-white neutral reduces eye strain and provides a warm, organic feel compared to pure white, echoing the coastal shores.
- **Surface Accents:** A deep charcoal (#2C3E50) is used for high-contrast text to ensure WCAG AA accessibility against the light backgrounds.

## Typography
The typography strategy employs a high-contrast pairing to distinguish between narrative and utility.

- **Headlines (Playfair Display):** Selected for its elegant serifs and historical weight. It should be used for storytelling, section titles, and hero statements. Use tighter letter-spacing for display sizes to maintain a premium "editorial" look.
- **Body & UI (Plus Jakarta Sans):** A contemporary sans-serif with soft, rounded terminals that reflect the portal's "welcoming" personality. Its high x-height ensures excellent legibility for informational content and service directories.
- **Labels:** Always set in Plus Jakarta Sans with increased tracking to provide a modern, systematic feel for metadata and small captions.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to ensure a curated, museum-like presentation of content. 

- **Grid System:** A 12-column grid with a 1280px max-width container. 
- **Vertical Rhythm:** Large vertical gaps (120px) are used between major home page sections to create a sense of "breathing space" and grandeur.
- **Content Reflow:** On smaller desktop viewports, margins shrink from 64px to 32px before transitioning to tablet behavior. 
- **Alignment:** Narrative text should be left-aligned for readability, while Hero components may utilize center-alignment for cinematic impact.

## Elevation & Depth
Depth in the design system is achieved through **Tonal Layers** and **Soft Ambient Shadows** rather than harsh borders.

- **Surface Tiers:** The base layer is Pasir Putih. Elevated cards use pure white (#FFFFFF) with a very soft, large-radius shadow (0px 12px 32px rgba(26, 82, 118, 0.08)) to appear as if floating slightly above the surface.
- **Heritage Overlays:** For hero images and destination cards, use a gradient overlay transitioning from transparent to Biru Laut (80% opacity) at the bottom to ensure white text remains legible.
- **Glassmorphism:** Navigation bars use a backdrop blur (12px) with a 70% opaque Pasir Putih fill to maintain a sense of place as the user scrolls through scenic imagery.

## Shapes
The shape language is **Soft**, balancing the rigidity of historical architecture with the fluidity of the ocean.

- **Standard Radius:** 0.25rem (4px) for interactive elements like input fields and small buttons, maintaining a professional and crisp appearance.
- **Container Radius:** Cards and large image containers use `rounded-lg` (8px) to soften the visual impact of high-resolution photography.
- **Cultural Motif:** Decorative elements or "See More" buttons may use a single-side rounded corner (e.g., top-left and bottom-right) to mimic the silhouette of traditional Butonese boat sails.

## Components
- **Primary Buttons:** Solid Biru Laut with white text. On hover, the background transitions to a slightly lighter blue with an Emas Tenun bottom border (2px).
- **Destination Cards:** Large, image-centric cards with `rounded-lg` corners. Titles use Playfair Display positioned at the bottom-left over a protective dark gradient.
- **Navigation:** A clean, centered top-bar. Links use Label-MD styling. The active state is indicated by a subtle Emas Tenun dot below the text.
- **Search Inputs:** Wide, minimalist fields with a Pasir Putih background and a 1px Biru Laut border. Icons should be thin-stroke (Linear) to maintain the refined aesthetic.
- **Chips/Tags:** Used for "History," "Nature," or "Culture" categories. They feature a light Biru Laut tint background with deep blue text, using the standard `rounded-sm` radius.
- **Hero Sections:** Full-bleed or large container images featuring "Maritime Heritage" photography, with centered Display-LG typography.