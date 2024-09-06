import os
import pathlib
import pymupdf4llm

for file in os.listdir("raw/"):
    md_text = pymupdf4llm.to_markdown(f"raw/{file}", write_images=True, image_path="images/")
    pathlib.Path(f"docs/{file.replace('pdf', 'md')}").write_bytes(md_text.encode())
