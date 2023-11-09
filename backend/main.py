from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import os
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/api/process-image')
async def process_image(file: UploadFile = UploadFile(...)):
    try:
        from attendance import perform_face_recognition
        result_df = perform_face_recognition(await file.read(), student_folder='photos')

        result_json = result_df.to_json(orient='records')

        return {'result': result_json}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='127.0.0.1', port=8000)

