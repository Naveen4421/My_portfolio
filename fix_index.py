import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update CSS for .sidebar
content = re.sub(
    r'(\.sidebar\s*\{\s*background: var\(--bg-panel\);\s*border: 1px solid var\(--border\);\s*border-radius: var\(--radius-window\);\s*box-shadow: [^;]+;\s*padding: )22px 18px',
    r'\1 16px 14px',
    content
)

# Insert sticky positioning
if 'position: sticky;' not in content:
    content = re.sub(
        r'(\.sidebar\s*\{[^}]*display: flex;\s*flex-direction: column;\s*transition: [^;]+;)',
        r'\1\n      position: sticky;\n      top: 36px;\n      height: max-content;',
        content
    )

# 2. Update CSS for padding/margins in sidebar elements
content = content.replace('padding: 10px 12px;', 'padding: 8px 10px;')
content = content.replace('margin-bottom: 18px;', 'margin-bottom: 12px;')
content = content.replace('margin: 4px 0 14px;', 'margin: 4px 0 10px;')
content = content.replace('padding: 9px 10px;', 'padding: 7px 8px;')
content = content.replace('margin: 20px 0 18px;', 'margin: 12px 0 10px;')
content = content.replace('padding-top: 16px;', 'padding-top: 12px;')
content = content.replace('gap: 10px;', 'gap: 8px;') # Note: might affect other gaps, but mostly safe for sidebar items

# 3. Replace the mesh-wrap completely
new_mesh = '''<div class="mesh-wrap" aria-hidden="true">
      <svg class="mesh-svg top-mesh" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: -50px; left: -50px; width: 600px; height: 600px; opacity: 0.95; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5));">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF5F57"/><stop offset="100%" stop-color="#D93830"/></linearGradient>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FEBC2E"/><stop offset="100%" stop-color="#D99B22"/></linearGradient>
          <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4C6FFF"/><stop offset="100%" stop-color="#2D4DCC"/></linearGradient>
          <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#22C55E"/><stop offset="100%" stop-color="#189846"/></linearGradient>
          <linearGradient id="g5" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FF7A45"/><stop offset="100%" stop-color="#E85920"/></linearGradient>
          <linearGradient id="g6" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#0ea5e9"/><stop offset="100%" stop-color="#0284c7"/></linearGradient>
        </defs>
        <!-- Large 3D faceted cluster -->
        <polygon points="100,50 250,80 180,200" fill="url(#g1)" />
        <polygon points="250,80 380,120 280,240" fill="url(#g3)" />
        <polygon points="180,200 250,80 280,240" fill="url(#g5)" />
        <polygon points="180,200 280,240 150,350" fill="url(#g2)" />
        <polygon points="280,240 380,120 420,280" fill="url(#g6)" />
        <polygon points="280,240 420,280 320,380" fill="url(#g4)" />
        <polygon points="150,350 280,240 320,380" fill="url(#g1)" />
        <polygon points="50,180 100,50 180,200" fill="url(#g6)" />
        <polygon points="50,180 180,200 150,350" fill="url(#g3)" />
        <polygon points="150,350 320,380 200,480" fill="url(#g5)" />
        <polygon points="320,380 420,280 450,420" fill="url(#g1)" />
        <polygon points="320,380 450,420 350,520" fill="url(#g3)" />
        <polygon points="200,480 320,380 350,520" fill="url(#g2)" />
        
        <!-- Floating accents -->
        <polygon points="450,80 480,90 460,120" fill="#FEBC2E" opacity="0.8" />
        <polygon points="80,400 110,420 70,450" fill="#4C6FFF" opacity="0.6" />
        <polygon points="480,300 520,310 500,350" fill="#FF5F57" opacity="1.0" />
      </svg>
      
      <svg class="mesh-svg bottom-mesh" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" style="position: fixed; bottom: -80px; right: -80px; width: 650px; height: 650px; opacity: 0.85; filter: drop-shadow(0 -20px 30px rgba(0,0,0,0.5)); z-index: -1;">
        <defs>
          <linearGradient id="b1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0ea5e9"/><stop offset="100%" stop-color="#0284c7"/></linearGradient>
          <linearGradient id="b2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4C6FFF"/><stop offset="100%" stop-color="#2D4DCC"/></linearGradient>
          <linearGradient id="b3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FF7A45"/><stop offset="100%" stop-color="#E85920"/></linearGradient>
          <linearGradient id="b4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#22C55E"/><stop offset="100%" stop-color="#189846"/></linearGradient>
          <linearGradient id="b5" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FEBC2E"/><stop offset="100%" stop-color="#D99B22"/></linearGradient>
        </defs>
        <!-- Large 3D faceted cluster -->
        <polygon points="150,200 300,250 220,380" fill="url(#b1)" />
        <polygon points="300,250 450,280 320,420" fill="url(#b3)" />
        <polygon points="220,380 300,250 320,420" fill="url(#b2)" />
        <polygon points="220,380 320,420 180,520" fill="url(#b5)" />
        <polygon points="320,420 450,280 480,450" fill="url(#b4)" />
        <polygon points="320,420 480,450 350,580" fill="url(#b1)" />
        <polygon points="180,520 320,420 350,580" fill="url(#b3)" />
        <polygon points="80,320 150,200 220,380" fill="url(#b4)" />
        <polygon points="80,320 220,380 180,520" fill="url(#b2)" />
        <polygon points="180,520 350,580 250,680" fill="url(#b1)" />
        
        <!-- Floating accents -->
        <polygon points="120,150 150,160 130,190" fill="#22C55E" opacity="0.9" />
        <polygon points="450,180 490,190 470,230" fill="#FF7A45" opacity="0.7" />
        <polygon points="80,550 110,570 70,600" fill="#4C6FFF" opacity="0.8" />
      </svg>
    </div>'''

content = re.sub(r'<div class="mesh-wrap" aria-hidden="true">.*?</div>', new_mesh, content, flags=re.DOTALL)

# Fix mesh-wrap CSS to allow the new positioning
content = content.replace('mask-image: radial-gradient(ellipse 420px 560px at 0% 0%, #000 45%, transparent 92%);', '')
content = content.replace('-webkit-mask-image: radial-gradient(ellipse 420px 560px at 0% 0%, #000 45%, transparent 92%);', '')
content = content.replace('height: 680px;', 'min-height: 100vh;')

# Also ensure console-body layout ensures sidebar is naturally contained without fixed height
if 'height: 100%;' not in content and 'max-height' in content:
   pass 

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done.")
