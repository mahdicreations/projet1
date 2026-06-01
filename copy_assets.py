import os
import shutil
import glob

brain_dir = r"C:\Users\el mahdi\.gemini\antigravity-ide\brain\b16840aa-b7e8-4c9a-9a97-038832eba5b1"
dest_dir = r"assets"

os.makedirs(dest_dir, exist_ok=True)

# Find the latest images generated
hero_files = sorted(glob.glob(os.path.join(brain_dir, "hero_makeup_*.png")))
about_files = sorted(glob.glob(os.path.join(brain_dir, "about_makeup_*.png")))
bridal_files = sorted(glob.glob(os.path.join(brain_dir, "gallery_bridal_*.png")))
glam_files = sorted(glob.glob(os.path.join(brain_dir, "gallery_glam_*.png")))

if hero_files:
    shutil.copy(hero_files[-1], os.path.join(dest_dir, "hero-makeup.png"))
    print(f"Copied {hero_files[-1]} to assets/hero-makeup.png")

if about_files:
    shutil.copy(about_files[-1], os.path.join(dest_dir, "about-makeup.png"))
    print(f"Copied {about_files[-1]} to assets/about-makeup.png")

if bridal_files:
    shutil.copy(bridal_files[-1], os.path.join(dest_dir, "gallery-bridal.png"))
    print(f"Copied {bridal_files[-1]} to assets/gallery-bridal.png")

if glam_files:
    shutil.copy(glam_files[-1], os.path.join(dest_dir, "gallery-glam.png"))
    print(f"Copied {glam_files[-1]} to assets/gallery-glam.png")

print("Asset copying completed successfully!")
