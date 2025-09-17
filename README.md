# Sanity Verse
This is a Sanity and Next.js project used to manage templates, blog posts, and pages.

## Key Dependencies

- Next.js
- Sanity
- Tailwind CSS
- React
- TypeScript

## Getting Started

### 1. Initialize template

```bash
npm create sanity@latest -- --template creedally/sanity-verse
```

### 2. Clone the repository:

```bash
git clone https://github.com/dhavalp-creedally/sanity-verse.git
cd sanity-verse
```

### 2. Start the Development 

```bash
npm run dev
```

### 3. Run the Project and sign in to Sanity

Run the next app locally at [http://localhost:3000](http://localhost:3000) and the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio).


## Project structure
```
sanity-verse
├── public                  # Static assets
├── src                     # Main source directory
│ ├── app                   # Next.js application
│ │ ├── (frontend)          # Frontend routes
│ │ │ ├── [slug]            # Dynamic page routes
│ │ │ ├── author            # Author page routes
│ │ │ │ ├── [slug]          # Dynamic author page routes
│ │ │ ├── blog              # Blog page routes
│ │ │ │ ├── [slug]          # Dynamic blog page routes
│ │ │ ├── category          # Category page routes
│ │ │ │ ├── [slug]          # Dynamic category page routes
│ │ │ ├── tag               # Tag page routes
│ │ │ │ ├── [slug]          # Dynamic tag page routes
│ │ ├── api                 # API routes
│ │ │ ├── blogs             # Blog fetch endpoint
│ │ ├── studio              # Sanity Studio routes
│ │ │ ├── [[...tool]]       # Studio catch-all routes
│ ├── components            # UI components
│ │ ├── layout              # Layout UI components
│ │ ├── modules             # Header Footer components
│ │ ├── sections            # Blog section components
│ ├── env                   # Environment specific functions
│ ├── lib                   # Shared libraries
│ │ ├── client              # Manage sanity client
│ ├── studio                # Sanity Studio route
│ │ ├── schemaTypes         # Content schemas
│ │ │ ├── documents         # Create sanity documents
│ │ │ ├── fields            # Sanity additional fields
│ │ │ ├── objects           # Manage body objects
│ │ │ │ ├── sections        # manage body section components
│ │ ├── structure           # Custom Sanity structure definitions
│ ├── utils                 # Utility functions
    
```


## Sanity Studio

- Config: sanity.config.ts
- Schemas: src/studio/schemaTypes/
- Custom Desk structure: src/studio/structure/index.ts

Studio is mounted at `/studio` via the Next.js App Router integration.

## Environment Variables (.env Files)

This project uses environment variables to manage sensitive configuration values (API keys, secrets, database credentials, etc.) without hardcoding them into the codebase.

### Conventions

- .env → Local development variables (not committed to Git).
- .env.example → Template with placeholder values (committed to Git).
- .env.local → Machine-specific overrides (git-ignored).
-  Production → Environment variables should be set on the server/hosting platform instead of using .env files.

### Best Practices

- Never commit `.env.local` It's ignored by `.gitignore`.  
- Use `.env.example`** to document required variables without exposing secrets.  
- Keep private keys and API secrets out of `NEXT_PUBLIC_` variables.

## Content model (schemas)

Documents

- `Pages`: Title, Slug, Featured Image, Published at, Author, Body Content(page components), SEO
- `Blogs`: Title, Slug, Featured Image, Published at, Categories, Tags, Author, Excerpt, Body Content(page components), SEO 
- `Categories`: Title, Slug, Description
- `Tags`: Title, Slug, Description
- `Authors`: Name, Slug, Designation, Avatar, Bio, Social Links
- `FAQs`: Title, Slug, Published at, Author, Content
- `Testimonials`: Title, Slug, Published at, Author Name, Author Role, Author Image, Quote
- `Settings`: Site Title, Site Description, Site Logo, Copyright Text, Home Page, Social Links, Header Navigation, Footer Navigation

Objects and blocks
- `Page Blocks`
    - `Heading`: Manage the Heading with level and alignment.
    - `Content`: Provide the rich text editor and manage the content
    - `Paragraph`: Manage the simple plain text.
    - `Button`: Manage the single button with setting.
    - `Buttons`: Manage the single button with setting in groups.
    - `Hero`:  Heading, Subheading, content, buttons, image and layout
    - `Media & Text`: Heading, Subheading, content, buttons, image Position
    - `FAQs`: Heading, Subheading, FAQs selection and buttons.
    - `Logo Grid`: Logos(images) and layout
    - `Blog Lists`: Heading, Subheading, Content, Number of Blogs, Enable pagination, Button Label 
    - `Call To Action`: Heading, Subheading, Content and Buttons
    - `Subscribe`: Heading, Subheading, Content and Button Label
    - `Contact Form`: Heading, Subheading, Content and Button Label
    - `Features Steps`: Heading, Subheading, Feature(heading, content, image)
    - `Cards`: Heading, Subheading, Cards Lists(heading, subheading, content, image)
    - `Separator`: Style, Full width, Margin
- `Seo`: Meta Title, Meta Description, Keywords, Disallow search indexing

## Development

Common commands

```
npm run dev      # Start Next.js app + Studio (mounted at /studio)
npm run build    # Production build
npm run start    # Start production server
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com)