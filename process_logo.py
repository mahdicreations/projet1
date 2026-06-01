import os
from PIL import Image, ImageOps

def make_transparent(input_path, output_path_clean, output_path_watermark):
    print(f"Opening image: {input_path}")
    if not os.path.exists(input_path):
        print(f"Error: {input_path} does not exist.")
        return False
        
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    watermark_data = []
    
    # Process pixels
    for item in datas:
        r, g, b, a = item
        
        # Calculate distance to pure white
        # Background is white/light grey
        # If the pixel is very bright/close to white, we strip it.
        # Let's check if R, G, B are all very high
        if r > 230 and g > 230 and b > 230:
            # Fully transparent
            new_data.append((r, g, b, 0))
            watermark_data.append((r, g, b, 0))
        elif r > 200 and g > 200 and b > 200:
            # Semi-transparent blending at borders to avoid jagged edges (antialiasing)
            # Calculate gradient factor based on brightness
            brightness = (r + g + b) / 3
            # Map 200-230 to alpha 255-0
            factor = (230 - brightness) / 30.0
            factor = max(0.0, min(1.0, factor))
            alpha = int(255 * factor)
            new_data.append((r, g, b, alpha))
            
            # Watermark version has very low opacity (5% to 12%)
            watermark_alpha = int(alpha * 0.12)
            watermark_data.append((r, g, b, watermark_alpha))
        else:
            new_data.append((r, g, b, a))
            
            # Watermark version has very low opacity (5% to 12%)
            watermark_alpha = int(a * 0.12)
            watermark_data.append((r, g, b, watermark_alpha))
            
    # Save clean transparent logo
    img.putdata(new_data)
    
    # Auto-crop bounding box of non-transparent elements to make it clean
    # Get bounding box of non-zero alpha
    bbox = img.getbbox()
    if bbox:
        img_cropped = img.crop(bbox)
        # Resize to reasonable dimensions for the web while keeping aspect ratio
        img_cropped.thumbnail((800, 800), Image.Resampling.LANCZOS)
        img_cropped.save(output_path_clean, "PNG")
        print(f"Saved clean logo to {output_path_clean} (Cropped to bbox: {bbox})")
    else:
        img.thumbnail((800, 800), Image.Resampling.LANCZOS)
        img.save(output_path_clean, "PNG")
        print(f"Saved clean logo to {output_path_clean} (No bbox found)")
        
    # Save watermark version (we don't crop it tightly so it keeps its circular framing centered in background)
    img_watermark = Image.new("RGBA", img.size)
    img_watermark.putdata(watermark_data)
    img_watermark.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
    img_watermark.save(output_path_watermark, "PNG")
    print(f"Saved watermark logo to {output_path_watermark}")
    
    return True

if __name__ == "__main__":
    # Create assets folder if it doesn't exist
    os.makedirs("assets", exist_ok=True)
    
    input_file = "../Gemini_Generated_Image_vkx2auvkx2auvkx2.png"
    output_clean = "assets/logo-clean.png"
    output_watermark = "assets/logo-watermark.png"
    
    success = make_transparent(input_file, output_clean, output_watermark)
    if success:
        print("Logo processing completed successfully!")
    else:
        print("Failed to process logo.")
