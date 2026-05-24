---
name: Maritime Heritage Administrative System
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#41474e'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#72787f'
  outline-variant: '#c1c7cf'
  surface-tint: '#2f6388'
  primary: '#003b5a'
  on-primary: '#ffffff'
  primary-container: '#1a5276'
  on-primary-container: '#94c5ee'
  inverse-primary: '#9bccf6'
  secondary: '#745a27'
  on-secondary: '#ffffff'
  secondary-container: '#fedb9b'
  on-secondary-container: '#795f2b'
  tertiary: '#3a3630'
  on-tertiary: '#ffffff'
  tertiary-container: '#514d46'
  on-tertiary-container: '#c4beb5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbe6ff'
  primary-fixed-dim: '#9bccf6'
  on-primary-fixed: '#001e30'
  on-primary-fixed-variant: '#0e4b6e'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#e4c285'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5a4312'
  tertiary-fixed: '#e8e1d8'
  tertiary-fixed-dim: '#ccc6bd'
  on-tertiary-fixed: '#1e1b16'
  on-tertiary-fixed-variant: '#4a4640'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  sidebar-width: 260px
  container-margin: 32px
  gutter: 20px
---

## Brand & Style
The design system for this administrative hub blends high-performance professional utility with the rich cultural warmth of the Baubau region. The brand personality is authoritative yet welcoming, reflecting a modern digital infrastructure that respects traditional maritime and weaving heritage.

The visual style is **Corporate Modern with a Cultural Inflection**. It prioritizes clarity and efficiency for data-heavy administrative tasks while using a palette of deep sea blues and woven golds to create an inviting, "human" environment. The interface utilizes clean lines and ample white space to maintain a professional atmosphere, punctuated by high-quality typography and subtle textural references to local craftsmanship.

## Colors
This design system employs a sophisticated maritime-inspired palette designed for long-duration administrative work.

- **Primary (Biru Laut):** Used for global navigation, the primary sidebar, and high-priority action buttons. It provides a sense of stability and depth.
- **Accent (Emas Tenun):** Inspired by traditional woven gold threads. Used sparingly for highlights, active states, and specific call-to-actions to provide warmth and prestige.
- **Background Strategy:** The core application frame uses a clean White (#FFFFFF), while the content canvas uses a warm Krem (#F5F3F0) to reduce eye strain and provide a subtle "paper-like" quality to the dashboard.
- **Typography:** Primary text uses a deep Coklat to avoid the harshness of pure black, maintaining a natural, grounded feel.

## Typography
The system uses a dual-font approach to balance personality and utility. **Plus Jakarta Sans** (substituted for Poppins for a more contemporary, balanced geometric feel) is used for headlines to provide a welcoming, friendly, and optimistic tone. **Inter** is the primary workhorse for all body copy, data tables, and labels, chosen for its exceptional legibility in technical environments.

Scale hierarchy is strictly enforced to ensure a clear information architecture. Display and Headline styles should be used for dashboard overviews, while Title and Body styles are reserved for content-heavy card modules and administrative forms.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. The sidebar remains at a fixed width of 260px, while the main content area is fluid, utilizing a 12-column grid system for internal dashboard components. 

A strict 4px base scale is used to define all spacing, ensuring rhythmic consistency. 
- **Mobile (<768px):** Sidebar collapses into a hamburger menu; margins reduce to 16px.
- **Tablet (768px - 1024px):** Sidebar can be minimized to an icon-only rail; 2-column card layouts reflow to 1-column.
- **Desktop (>1024px):** Full 12-column grid; 32px margins provide a spacious, premium administrative feel.

## Elevation & Depth
This design system utilizes **Tonal Layering** combined with high-precision **Ambient Shadows**. 

Depth is primarily established by the contrast between the white background of the primary container and the light Krem background of the content area. 
- **Base Level:** The background canvas (#F5F3F0).
- **Raised Level:** White (#FFFFFF) cards and containers utilize a soft, diffused shadow: `0 2px 8px rgba(0,0,0,0.06)`. This creates a tactile quality without overwhelming the data.
- **Active Level:** Interactive elements (buttons, active navigation) may use a slightly deeper shadow on hover to indicate "lift" and interactivity.
- **Sidebar:** A solid, flat implementation of Primary Blue to ground the interface and provide a permanent visual anchor.

## Shapes
The shape language is sophisticated and approachable, avoiding harsh industrial corners. 
- **Small (8px):** Used for input fields, checkboxes, and small action buttons.
- **Medium (12px):** The standard for dashboard cards, modal containers, and dropdown menus.
- **Large (16px):** Reserved for major layout sections, featured hero cards, and large-scale imagery or banners.

This tiered rounding ensures that smaller interactive elements feel precise, while larger containers feel soft and inviting.

## Components
Consistent component styling reinforces the "Professional-Warm" brand narrative:

- **Buttons:** Primary buttons use the Biru Laut background with white text and 8px rounding. Accent buttons use Emas Tenun to highlight "Add" or "Submit" actions.
- **Sidebar:** The background is #1A5276. Active items use a semi-transparent white overlay or a small Emas Tenun vertical indicator on the left edge.
- **Cards:** Essential for the dashboard. Must use the White #FFFFFF background, 12px rounding, and the signature light shadow.
- **Input Fields:** 8px rounding, a subtle 1px border in Abu Hangat (#6B6560), and Inter typography.
- **Icons:** Use Material Icons. For the sidebar and main navigation, use **Filled** icons to indicate the active page and **Outline** icons for inactive states to maintain visual lightness.
- **Status Chips:** Use a soft-tinted version of the status color (e.g., light green for active, light red for pending) with 16px (pill) rounding to distinguish them from buttons.