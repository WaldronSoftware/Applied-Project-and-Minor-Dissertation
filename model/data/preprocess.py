import os
from PIL import Image
import numpy as np

os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

def resize_images(image_directory, output_directory, size=(224, 224)):
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)
    for img_name in os.listdir(image_directory):
        img_path = os.path.join(image_directory, img_name)
        img = Image.open(img_path)
        img = img.resize(size)
        output_path = os.path.join(output_directory, img_name)
        img.save(output_path)

if __name__ == "__main__":
    resize_images('./train', './valid')
