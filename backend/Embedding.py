import os
import cv2
import insightface
import pandas as pd
import numpy as np


# Load the InsightFace model for face recognition
model = insightface.app.FaceAnalysis()
model.prepare(ctx_id=0, det_size=(640, 640))

# Load the group photo
group_image_path = 'qwe.jpg'
group_img = cv2.imread(group_image_path)

# Load and process student images
student_folder = 'images'
student_images = os.listdir(student_folder)

faces_count = 0
student_data = []
for student_image in student_images:
    student_id = os.path.splitext(student_image)[0]
    student_image_path = os.path.join(student_folder, student_image)
    img = cv2.imread(student_image_path)

    if img is not None:
        faces = model.get(img)

    if faces:
        faces_count += 1
        student_data.append(
            {'student_id': student_id, 'face_features': faces[0].embedding})


print("Number of students: ", faces_count)