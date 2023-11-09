import os
import cv2
import insightface
import pandas as pd
import numpy as np
from Embedding import student_data
from Embedding import model

# Define a function to perform face recognition and return a Pandas DataFrame
def perform_face_recognition(group_image_path):

    # Load the group photo again
    group_img = cv2.imread(group_image_path)

    # Create a CSV file to store the results
    recognized_faces = 0
    results = []
    for student in student_data:
        for face in model.get(group_img):
            similarity = np.dot(face.embedding, student['face_features']) / (
                np.linalg.norm(face.embedding) * np.linalg.norm(student['face_features']))
            if similarity > 0.30:  # Adjust the threshold as needed
                recognized_faces += 1
                results.append(
                    {'student_id': student['student_id'], 'attendance': 'Present'})
                break
        else:
            results.append(
                {'student_id': student['student_id'], 'attendance': 'Absent'})

    print("Number of recognized faces: ", recognized_faces)

    # Create a Pandas DataFrame from the results
    results_df = pd.DataFrame(results)

    return results_df

# Example usage:
group_image_path = 'qwe.jpg'
student_folder = 'images'
result_df = perform_face_recognition(group_image_path)



# Save the results to a CSV file
result_df.to_csv('attendance.csv', index=False)

print("Attendance data saved to attendance.csv")