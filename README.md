# Portafoli de Xavier Hijós

Portafoli personal estàtic, preparat per publicar-se directament amb GitHub Pages. El projecte utilitza HTML, CSS i JavaScript natius, sense dependències ni procés de compilació.

## Estructura

```text
.
├── index.html
└── assets/
    ├── css/
    │   ├── base.css
    │   ├── components.css
    │   └── responsive.css
    └── js/
        ├── main.js
        ├── data/
        │   ├── education.js
        │   └── projects.js
        └── ui/
            ├── education.js
            ├── navigation.js
            └── projects.js
```

## Edició ràpida

- **Projectes:** edita `assets/js/data/projects.js`.
- **Formació:** edita `assets/js/data/education.js`.
- **Text principal:** edita les seccions corresponents a `index.html`.
- **Colors i tipografia:** modifica les variables de `:root` a `assets/css/base.css`.
- **Components:** els estils de targetes, botons, navegació i seccions són a `assets/css/components.css`.
- **Mòbil:** els ajustos responsius són a `assets/css/responsive.css`.

Per comprovar els mòduls JavaScript en local cal servir la carpeta mitjançant HTTP. Per exemple:

```powershell
python -m http.server 8000
```

Després obre `http://localhost:8000`.
