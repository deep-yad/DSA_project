# Face-Recognition  Attendance System

## Team Details:
- Debasish Padhy (220001025)
- Deepak Yadav (220001026)
- Pranav Kalwaghe (220001035)
  
## Overview

This project is an attendance management system that uses the power of InsightFace for facial recognition. This website allow user to mark attendance by uploading images files.

## Features

- Facial recognition for attendance tracking
- User-friendly interface
- Different courses selection and date selection

- ## Data Structures

- Python List
- Numpy Array
- Dictionary

## InsightFace

-InsightFace is an integrated Python library for 2D&3D face analysis. InsightFace efficiently implements a rich variety of state of the art algorithms of face recognition,
face detection and face alignment, which optimized for both training and deployment.

-For alignment, it uses a coarse-to-fine strategy. An MTCNN face detector gives coarse alignment, then an affine transformation provides finer alignment.This makes it robust to pose variation.

-Data augmentation techniques like horizontal flipping, image distortion, and lighting noise injection further improve its ability to handle real-world variations.

-It uses complex face recognition training and principle component analysis based noise injection to learn highly distinct facial features.


## Prerequisites

Before you start, ensure you have the following installed:

- Python 3.x
- InsightFace library
- node.js
- React
- uvicorn, FastApi

## Installation and Setup


1. Clone the repository:

   ```bash
   git clone https://github.com/deep-yad/DSA_project.git

2. Install Dependencies

   ```bash
   # server dependencies
   cd server
   pip install -r requirements.txt

   # client dependencies
   cd ../client
   npm install

3. Run the application

   ```bash
   # server
   cd ../server
   uvicorn main:app --reload

   # client
   cd ../client
   npm start



## Future Improvements

* Database Connection (preferably Mysql)
* Reduces the time of Execution  of the model
* Implementing Login and signup functionality

## Acknowledgements
* InsightFace developers and contributors.
* FastAPI, ReactJS, and TailwindCSS communities for their valuable tools and frameworks.
