# Brainwave.io - Landing Page AirPods

Landing page moderne pour la vente d'AirPods, développée avec Next.js 15, React 19 et Tailwind CSS.

## Installation et lancement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
npm install
# ou
yarn install
```

### Lancement en développement
```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production
```bash
npm run build
npm run start
# ou
yarn build
yarn start
```

## Structure du projet

```
my-app/
├── public/                     # Assets statiques (images)
│   ├── Air pods.png
│   ├── Airpods Green.png
│   ├── Airpods Pink.png
│   ├── Airpods White.png
│   ├── Enjoying Image.png
│   ├── Running Image.png
│   ├── ImageAdv.png
│   ├── ProfilReview.png
│   └── airpod-image.png
│
├── src/
│   ├── app/                    # Configuration Next.js App Router
│   │   ├── layout.tsx         # Layout racine avec métadonnées
│   │   ├── page.tsx           # Page d'accueil
│   │   └── globals.css        # Styles globaux et variables CSS
│   │
│   ├── modules/app/           # Sections de la landing page
│   │   ├── hero.section.tsx              # Section hero avec titre principal
│   │   ├── features.section.tsx          # Section caractéristiques (indigo-50)
│   │   ├── testimonial.section.tsx       # Section témoignage (indigo-600)
│   │   ├── trendy-designs.section.tsx    # Section designs tendance (#161C2D)
│   │   ├── products.section.tsx          # Section produits avec cartes
│   │   └── lifestyle.section.tsx         # Section image lifestyle
│   │
│   ├── features/home/         # Feature home
│   │   └── home.page.tsx      # Composition de toutes les sections
│   │
│   └── ui/                    # Composants UI primitifs réutilisables
│       ├── button.tsx         # Composant bouton (primary/secondary)
│       ├── card.tsx           # Composants Card et ProductCard
│       ├── feature-item.tsx   # Composant item de caractéristique
│       ├── header.tsx         # En-tête avec navigation
│       └── footer.tsx         # Pied de page
│
└── README.md                  # Documentation
```

## Organisation du code

### Architecture des composants

Tous les composants suivent la même structure :
```typescript
type ComponentNameProps = {
    // props typées
}

export const ComponentName: React.FC<ComponentNameProps> = (props): React.JSX.Element => {
    return (
        // JSX
    );
}
```

### Conventions de nommage
- **Types** : Tous les types se terminent par `Props` (ex: `ButtonProps`, `HeroSectionProps`)
- **Composants** : PascalCase (ex: `Button`, `HeroSection`)
- **Fichiers** : kebab-case pour les sections (ex: `hero.section.tsx`)
- **Types uniquement** : Pas d'interfaces, uniquement des types

### Sections

Les sections sont organisées dans `src/modules/app/` :

1. **Hero Section** (`hero.section.tsx`)
   - Image principale des AirPods
   - Titre et sous-titre
   - CTA principal
   - Fond: slate-50

2. **Features Section** (`features.section.tsx`)
   - Image runner à gauche
   - Liste de caractéristiques avec icônes
   - Fond: indigo-50

3. **Testimonial Section** (`testimonial.section.tsx`)
   - Témoignage client avec photo
   - Image lifestyle à droite
   - Fond: indigo-600

4. **Trendy Designs Section** (`trendy-designs.section.tsx`)
   - Titre centré
   - Image produit principale
   - Fond: #161C2D (couleur custom)

5. **Products Section** (`products.section.tsx`)
   - Grille de 3 cartes produits
   - Variantes: Midnight Green, Silver, Gold
   - Fond: slate-50

6. **Lifestyle Section** (`lifestyle.section.tsx`)
   - Image pleine largeur
   - Fond: slate-50

### Composants UI

Les composants UI primitifs sont dans `src/ui/` :

- **Button** : Bouton avec variantes primary/secondary
- **Card** : Carte de base et ProductCard pour les produits
- **FeatureItem** : Item de caractéristique avec icône
- **Header** : Navigation avec logo et menu
- **Footer** : Pied de page avec liens

### Charte graphique

#### Couleurs Tailwind
- `slate-50` : Arrière-plan de la page
- `slate-800` : Textes sombres
- `indigo-50` : Arrière-plan section features
- `indigo-600` : Arrière-plan section testimonial + boutons
- `rose-600` : Sous-titre hero

#### Couleurs personnalisées (globals.css)
- `#161C2D` : Arrière-plan section trendy designs
- `#FFFFFF` : Textes clairs

### Responsive Design

Le design est responsive grâce aux breakpoints Tailwind :
- **Mobile** : Design par défaut (< 768px)
- **Tablette** : Breakpoint `md:` (≥ 768px)
- **Desktop** : Breakpoint `lg:` (≥ 1024px)

Layout privilégié : Flexbox avec `gap` pour les espacements, évitant les `margin-top`.

## Technologies utilisées

- **Next.js 15** : Framework React avec App Router
- **React 19** : Bibliothèque UI
- **TypeScript** : Typage statique
- **Tailwind CSS** : Framework CSS utility-first
- **Geist Font** : Police système moderne

## Scripts disponibles

```bash
npm run dev          # Lancement serveur de développement
npm run build        # Build de production
npm run start        # Lancement serveur de production
npm run lint         # Linter ESLint
```
